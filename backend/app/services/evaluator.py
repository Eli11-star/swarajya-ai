from datetime import date
import uuid


from app.services.pdf_service import extract_text
from app.services.llm_service import evaluate_document
from app.services.qr_service import generate_qr
from app.services.pdf_generator import generate_passport_pdf
from app.database import SessionLocal
from app.models import Passport


def evaluate(pdf_path):

    # Extract PDF text
    document_text = extract_text(pdf_path)

    # AI evaluation
    try:
        passport = evaluate_document(document_text)

    except Exception as e:
        print(e)

        passport = {
            "modelName": "Demo AI Model",
            "organization": "Demo Organization",
            "version": "1.0",
            "scores": {
                "security": 90,
                "privacy": 88,
                "fairness": 91,
                "explainability": 89,
                "governance": 92,
                "robustness": 90
            },
            "summary": "Gemini is temporarily unavailable. Showing a fallback evaluation.",
            "recommendations": [
                "Retry evaluation later.",
                "Review privacy documentation.",
                "Perform governance audit."
            ]
        }

    # Calculate Trust Score
    scores = passport["scores"]

    passport["trustScore"] = round(
        (
            scores["security"] +
            scores["privacy"] +
            scores["fairness"] +
            scores["explainability"] +
            scores["governance"] +
            scores["robustness"]
        ) / 6
    )

    score = passport["trustScore"]

    # Determine Risk
    if score >= 90:
        passport["risk"] = "Low"
    elif score >= 70:
        passport["risk"] = "Medium"
    else:
        passport["risk"] = "High"

    # Determine Status
    if score >= 90:
        passport["status"] = "Approved"
    elif score >= 70:
        passport["status"] = "Conditional"
    else:
        passport["status"] = "Rejected"

    # Generate Passport ID
    passport["passportId"] = (
        f"AI-IND-{date.today().year}-{str(uuid.uuid4())[:8].upper()}"
    )

    # Issue Date
    passport["issueDate"] = str(date.today())

    # Generate QR
    passport["qr"] = generate_qr(passport["passportId"])

    # Generate PDF
    passport["pdf"] = generate_passport_pdf(passport)

    # Save to database
    db = SessionLocal()

    db_passport = Passport(
        passportId=passport["passportId"],
        modelName=passport["modelName"],
        organization=passport["organization"],
        version=passport["version"],
        issueDate=passport["issueDate"],
        trustScore=passport["trustScore"],
        risk=passport["risk"],
        status=passport["status"],
        summary=passport["summary"],
        scores=passport["scores"],
        recommendations=passport["recommendations"],
        qr=passport["qr"],
        pdf=passport["pdf"],
    )

    db.add(db_passport)
    db.commit()
    db.close()

    return passport