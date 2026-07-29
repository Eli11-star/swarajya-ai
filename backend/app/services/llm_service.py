import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

# Recommended model
MODEL = "gemini-2.5-flash"


def evaluate_document(document_text: str):

    # Prevent extremely large PDFs from exceeding token limits
    document_text = document_text[:25000]

    prompt = f"""
Return ONLY valid JSON.

{{
  "modelName": "",
  "organization": "",
  "version": "1.0",
  "trustScore": 0,
  "risk": "",
  "status": "",
  "scores": {{
    "security": 0,
    "privacy": 0,
    "fairness": 0,
    "explainability": 0,
    "governance": 0,
    "robustness": 0
  }},
  "summary": "",
  "recommendations": []
}}

Document:

{document_text}
""" 


    try:

        response = client.models.generate_content(
            model=MODEL,
            contents=prompt
        )

        text = response.text.strip()

        # Remove Markdown code fences if Gemini returns them
        if text.startswith("```json"):
            text = text.replace("```json", "").replace("```", "").strip()

        elif text.startswith("```"):
            text = text.replace("```", "").strip()

        passport = json.loads(text)

        # ---------- Default Values ----------

        passport.setdefault("modelName", "Unknown Model")
        passport.setdefault("organization", "Unknown Organization")
        passport.setdefault("version", "1.0")
        passport.setdefault("trustScore", 0)
        passport.setdefault("risk", "Unknown")
        passport.setdefault("status", "Pending")
        passport.setdefault("summary", "")
        passport.setdefault("recommendations", [])

        passport.setdefault("scores", {})

        passport["scores"].setdefault("security", 0)
        passport["scores"].setdefault("privacy", 0)
        passport["scores"].setdefault("fairness", 0)
        passport["scores"].setdefault("explainability", 0)
        passport["scores"].setdefault("governance", 0)
        passport["scores"].setdefault("robustness", 0)

        return passport

    except json.JSONDecodeError:

        raise Exception(
            f"Gemini returned invalid JSON:\n\n{text}"
        )

    except Exception as e:

        raise Exception(
            f"Gemini API Error: {str(e)}"
        )