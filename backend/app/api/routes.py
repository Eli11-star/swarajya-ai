from fastapi import APIRouter, UploadFile, File
from fastapi.responses import FileResponse
from pydantic import BaseModel
import shutil
from app.database import SessionLocal
from app.models import Passport



from app.services.evaluator import evaluate
from typing import List
from google import genai
from dotenv import load_dotenv
import os
from pydantic import BaseModel, Field
from app.services.report_service import generate_report
from app.database import SessionLocal
from app.models import Passport


load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


# -------------------------
# Upload & Evaluate
# -------------------------

@router.post("/evaluate")
async def evaluate_model(file: UploadFile = File(...)):

    path = os.path.join(UPLOAD_DIR, file.filename)

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return evaluate(path)


# -------------------------
# Registry
# -------------------------

@router.get("/registry")
def get_registry():

    db = SessionLocal()

    passports = db.query(Passport).all()

    db.close()

    return passports


# -------------------------
# Download Passport PDF
# -------------------------

@router.get("/passport/{passport_id}")
def download_passport(passport_id: str):

    path = f"generated/{passport_id}.pdf"

    return FileResponse(
        path,
        media_type="application/pdf",
        filename=f"{passport_id}.pdf",
    )


# -------------------------
# AI Copilot
# -------------------------
class ChatRequest(BaseModel):
    question: str
    passport: dict
    history: List[dict] = Field(default_factory=list)


@router.post("/copilot")
def copilot(request: ChatRequest):

    question = request.question

    passport = request.passport

    prompt = f"""
You are SwarajyaAI Copilot.

You are an expert AI Governance Auditor working for the Government of India.

Passport Data:

{passport}

Conversation History:

{request.history}

Current User Question:

{question}

Rules:

1. Base every answer ONLY on the passport.
2. Never invent facts.
3. Mention the Trust Score whenever relevant.
4. Mention the Risk Level whenever relevant.
5. Give practical recommendations.
6. Use bullet points where appropriate.
7. Keep answers under 200 words.
8. Be professional and concise.
"""

    try:
      response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

      return {
        "answer": response.text
    }

    except Exception as e:
      return {
        "answer": f"Copilot error: {str(e)}"
    }

@router.get("/report/{passport_id}")
def report(passport_id: str):

    db = SessionLocal()

    model = (
        db.query(Passport)
        .filter(Passport.passportId == passport_id)
        .first()
    )

    if not model:
        return {"error": "Passport not found"}

    passport = {
        "passportId": model.passportId,
        "modelName": model.modelName,
        "organization": model.organization,
        "version": model.version,
        "trustScore": model.trustScore,
        "risk": model.risk,
        "status": model.status,
        "summary": model.summary,
        "scores": model.scores,
        "recommendations": model.recommendations,
    }

    report = generate_report(passport)

    db.close()

    return {
        "report": report
    }
@router.get("/verify/{passport_id}")
def verify_passport(passport_id: str):

    db = SessionLocal()

    passport = (
        db.query(Passport)
        .filter(Passport.passportId == passport_id)
        .first()
    )

    db.close()

    if passport:

        return {
            "verified": True,
            "passport": passport,
        }

    return {
        "verified": False,
    }
@router.get("/ledger/{passport_id}")
def get_ledger(passport_id: str):

    db = SessionLocal()

    passport = (
        db.query(Passport)
        .filter(Passport.passportId == passport_id)
        .first()
    )

    db.close()

    if not passport:
        return []

    return [
        {
            "time": passport.issueDate,
            "title": "Document Evaluated",
            "description": "AI model evaluation completed."
        },
        {
            "time": passport.issueDate,
            "title": "Trust Score Calculated",
            "description": f"Trust Score: {passport.trustScore}"
        },
        {
            "time": passport.issueDate,
            "title": "Risk Assessment",
            "description": passport.risk
        },
        {
            "time": passport.issueDate,
            "title": "Passport Generated",
            "description": passport.passportId
        },
        {
            "time": passport.issueDate,
            "title": "Verification Ready",
            "description": "QR code created."
        }
    ]
