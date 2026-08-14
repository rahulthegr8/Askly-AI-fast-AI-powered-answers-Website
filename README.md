# 🤖 Askly AI

**Ask Anything. Understand Everything.**

Askly AI is an AI-powered answer engine that allows users to ask questions and receive intelligent AI-generated responses through a clean and responsive web interface.

---

## ✨ Features

- 🤖 AI-powered question answering
- 🔎 Simple search-style interface
- ⚡ FastAPI backend
- 🧠 Google Gemini AI integration
- 💻 HTML, CSS and JavaScript frontend
- 📱 Responsive design for desktop and mobile
- 🔗 Frontend and backend API integration
- 🌐 REST API support

---

## 🛠️ Technologies Used

### Backend
- Python
- FastAPI
- Uvicorn
- Google Gemini API
- Python Dotenv

### Frontend
- HTML5
- CSS3
- JavaScript

---

## 📁 Project Structure

```text
Askly-AI/
│
├── backend/
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md
```

> `.env` is intentionally excluded from the repository to protect API keys.

---

## 🚀 Run the Backend

Open PowerShell inside the `backend` folder and run:

```powershell
python -m uvicorn main:app --reload
```

The backend will run locally at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder on your local computer.

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Never upload your real API key to GitHub.

---

## 🔌 API Endpoint

Askly AI uses the following endpoint:

```text
GET /ask?question=your_question
```

Example:

```text
http://127.0.0.1:8000/ask?question=What%20is%20AI
```

---

## 🎯 Project Goal

The goal of Askly AI is to build a simple, fast and user-friendly AI answer engine while learning full-stack development with Python, FastAPI and modern web technologies.

---

## 👨‍💻 Developer

**Developed by Rahul Anand**

© 2026 Rahul Anand. All Rights Reserved.
