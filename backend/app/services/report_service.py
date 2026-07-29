import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

MODEL = "gemini-2.5-flash"


def generate_report(passport):

    prompt = f"""
You are India's Chief AI Governance Auditor.

Using ONLY this passport:

{passport}

Write a professional executive audit report.

Include:

# Executive Summary

# Overall Trust Score

# Security Analysis

# Privacy Analysis

# Fairness Analysis

# Explainability

# Governance

# Deployment Recommendation

# Improvements

Use markdown.
Maximum 700 words.
"""

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text