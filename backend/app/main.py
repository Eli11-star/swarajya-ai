import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.routes import router

from app.database import Base, engine
import app.models

# Create folders before mounting them
os.makedirs("generated", exist_ok=True)
os.makedirs("generated/qr", exist_ok=True)
os.makedirs("uploads", exist_ok=True)
os.makedirs("reports", exist_ok=True)

app = FastAPI(title="SwarajyaAI API")

origins = [
    "http://localhost:5173",
    "https://swarajya-ai-frontend.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount(
    "/generated",
    StaticFiles(directory="generated"),
    name="generated"
)
Base.metadata.create_all(bind=engine)

app.include_router(router)