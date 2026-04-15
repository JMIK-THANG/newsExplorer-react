
# 📰 News Explorer

**News Explorer** is a responsive React application that allows users to search for news articles using the News API and save them to their profile. The app supports user registration and login, protected routes, and integrates with a custom backend for managing users and saved articles.

---

## 🔗 Live Demo

👉 [Live App](https://newsexplorer-react-sfoy.onrender.com)  
👉 [Frontend GitHub Repo](https://github.com/JMIK-THANG/newsExplorer-react)  
👉 [Backend GitHub Repo](https://github.com/JMIK-THANG/newsExplorer-backend)

---

## 📌 Features

- 🔍 **Search by Keyword** — Fetches recent news articles from the past 7 days via News API
- 💾 **Save Articles** — Authenticated users can save articles to their account
- 🧾 **View & Manage Saved Articles** — Accessible via protected route `/saved-news`
- 🔐 **Authentication** — Includes registration, login, JWT handling, and route protection
- 🎨 **Figma-Based UI** — Matches a provided design spec using BEM CSS methodology

---

## 🛠 Tech Stack

### ✨ Frontend
- React
- React Router
- JSX
- CSS (BEM)
- HTML Form Validation (custom + native)

### 🔗 Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- API validation with Celebrate / Joi

### 🌍 External API
- [NewsAPI.org](https://newsapi.org/)

---

## ⚙️ Connecting to Backend

This project communicates with a custom backend to manage user accounts and saved articles.

To connect the frontend to the backend, create a `.env` file in the root:

```env
REACT_APP_API_URL=http://localhost:3005
