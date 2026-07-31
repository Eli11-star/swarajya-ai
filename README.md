# 🇮🇳 SwarajyaAI
### Sovereign AI Governance & Trust Platform for India

> **Trust Every AI. Build for India.**

SwarajyaAI is an AI Governance platform that evaluates AI systems, generates AI Passports, measures trustworthiness, and helps organizations assess compliance with responsible AI principles.

The platform enables transparent AI evaluation through automated trust scoring, governance analysis, compliance reporting, and digital AI passports.

---

## 🚀 Live Demo

Frontend:
https://swarajya-ai-frontend.vercel.app

Backend API:
https://swarajya-ai-backend-zs6a.onrender.com/docs

---

# ✨ Features

## 📄 AI Model Evaluation

Upload AI documentation (PDF) and automatically evaluate:

- Security
- Privacy
- Fairness
- Explainability
- Governance
- Robustness

---

## 🛡 AI Passport

Every evaluated AI system receives a digital passport containing:

- Passport ID
- Trust Score
- Risk Level
- Compliance Status
- Organization
- Model Information
- AI Governance Summary
- Recommendations

---

## 📊 Trust Engine Dashboard

Interactive visualization of AI trust metrics including:

- Trust Score
- Security
- Privacy
- Fairness
- Governance
- Explainability
- Robustness

---

## 📑 Executive Report

Automatically generated AI governance reports containing:

- Overall evaluation
- Trust analysis
- Risks
- Recommendations
- Compliance summary

---

## 🤖 AI Copilot

Gemini-powered governance assistant capable of answering questions about evaluated AI systems using the generated passport.

---

## 📚 Registry

Maintain a registry of all evaluated AI models.

---

## 🧾 Audit Ledger

Track lifecycle events including:

- Evaluation
- Trust Score generation
- Risk assessment
- Passport issuance
- Verification

---

## 🔐 QR Verification

Each passport includes a QR Code that can be scanned for verification.

---

# 🏗 Architecture

```
                    +---------------------+
                    |     React Frontend  |
                    |        (Vite)       |
                    +----------+----------+
                               |
                               |
                         REST API
                               |
                               |
                    +----------v----------+
                    |    FastAPI Backend  |
                    +----------+----------+
                               |
             +-----------------+----------------+
             |                                  |
      Gemini API                         SQLite Database
             |                                  |
             |                           Passport Registry
             |
      AI Evaluation Engine
```

---

# 🛠 Tech Stack

## Frontend

- React 19
- Vite
- TailwindCSS
- React Router
- Axios
- Recharts
- Framer Motion
- React Dropzone
- Lucide Icons

---

## Backend

- FastAPI
- SQLAlchemy
- SQLite
- Google Gemini API
- Pydantic
- Uvicorn

---

## Deployment

Frontend

- Vercel

Backend

- Render

---

# 📂 Project Structure

```
swarajya-ai
│
├── backend
│   ├── app
│   ├── generated
│   ├── uploads
│   ├── reports
│   ├── main.py
│   └── requirements.txt
│
├── src
│   ├── components
│   ├── pages
│   ├── context
│   ├── services
│   └── routes
│
├── public
├── package.json
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Eli11-star/swarajya-ai.git

cd swarajya-ai
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs on

```
http://localhost:8000
```

---

## Frontend

```bash
npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Backend

Create a `.env` file inside the backend folder.

```
GEMINI_API_KEY=your_api_key
```

Frontend

Create a `.env` file.

```
VITE_API=http://localhost:8000
```

Production

```
VITE_API=https://your-backend-url.onrender.com
```

---

# 📸 Screenshots

Add screenshots here:

- Landing Page
- Upload Page
- Trust Dashboard
- AI Passport
- Registry
- AI Copilot

---

# 🌟 Future Improvements

- AI Bias Detection
- Model Explainability Visualizations
- Blockchain-based Passport Verification
- Multi-language Support
- Role-Based Authentication
- AI Risk Monitoring Dashboard
- Continuous Model Monitoring
- Compliance Benchmarking

---

# 👨‍💻 Author

**Your Name**

GitHub:
https://github.com/Eli11-star

LinkedIn:
(Add your LinkedIn)

---

# 📜 License

This project is licensed under the MIT License.

---

## ⭐ If you found this project useful, consider giving it a star!