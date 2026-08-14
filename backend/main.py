import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from google import genai

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


@app.get("/")
def home():
    return {
        "message": "AI Search Engine Backend Working"
    }


@app.get("/ask")
def ask(question: str):
    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=question
    )

    return {
        "question": question,
        "answer": response.text
    }
