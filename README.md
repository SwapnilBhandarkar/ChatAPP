# Chatty

A real-time chat application with **Django** as the backend and **React** as the frontend. Users can **register, log in, create chat rooms, delete chat rooms, and chat efficiently**.

## Features

- **User Authentication** – Register and log in securely.
- **Chat Rooms** – Create and delete chat rooms.
- **Real-time Messaging** – Chat efficiently with AJAX polling.
- **Django Backend** – Handles authentication, chat room management, and messages.
- **React Frontend** – Provides an interactive and user-friendly interface.

## Tech Stack

- **Backend**: Django, Django REST Framework  
- **Frontend**: React, Axios  
- **Database**: PostgreSQL / SQLite (depending on configuration)  
- **Authentication**: JWT (JSON Web Tokens)  

# My Project

This project is built with **Django** (backend) and **React with Vite** (frontend).

---

## 🛠️ Getting Started

### Step 1: Clone the Repository
```sh
git clone https://github.com/your-username/Chatty.git
cd Chatty
```

---

## 🔧 Backend Setup (Django)

### Step 2: Set Up Virtual Environment (Recommended)
```bash
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate  # On Windows
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Apply Migrations
```bash
python manage.py migrate
```

### Step 5: Create a Superuser (For Admin Panel)
```bash
python manage.py createsuperuser
```

### Step 6: Run the Backend Server
```bash
python manage.py runserver
```
The backend will run at **http://127.0.0.1:8000/**.

---

## 🎨 Frontend Setup (React + Vite)

### Step 7: Navigate to the Frontend Directory
```bash
cd frontend
```

### Step 8: Install Dependencies
```bash
npm install
```

### Step 9: Start the Development Server
```bash
npm run dev
```
The frontend will run at **http://localhost:5173/**.

---

## 🎯 Features
- Django-powered backend with authentication and admin panel.
- React frontend built with Vite for fast performance.
- API integration between frontend and backend.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 📌 Notes
- Ensure you have **Python** and **Node.js** installed.
- Use a **virtual environment** for Django (`venv` recommended).
- Update `.env` files for any environment-specific configurations.

---




   
