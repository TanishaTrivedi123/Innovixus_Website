# 🚀 Innovixus – Technical Club Website

Innovixus is a **full‑stack MERN (MongoDB, Express, React, Node.js)** based website developed for a technical club. The platform is designed to showcase club events, manage upcoming activities, handle user interactions, and provide an **admin‑controlled dashboard** to manage content dynamically — without repeated hard‑coding.

---

## ✨ Key Features

### 🌐 Public User Features

* 📅 **View All Events** – Users can explore all past and ongoing technical events.
* ⏳ **Upcoming Events Section** – Displays future events clearly and separately.
* 🖼️ **Event Gallery** – View event photos uploaded dynamically.
* 🧑‍💻 **About Section** – Information about the Innovixus technical club.
* 📞 **Contact Page** – Users can submit queries or feedback through a form.

---

### 🔐 Admin Panel Features

The website includes a **secure admin route** that allows authorized admins to manage the platform.

* 🔑 **Admin Authentication** – Admin accesses the dashboard via password protection.
* ➕ **Add Upcoming Events** – Create and manage upcoming event details.
* 🖼️ **Upload Event Photos** – Add event images via forms (no hard‑coding required).
* 📊 **View Contact Responses** – Access messages and responses submitted by users.

This ensures smooth content management and scalability.

---

## 🧭 Frontend Routes (React)

| Route              | Description                         |
| ------------------ | ----------------------------------- |
| `/EnterPage`       | Landing / Entry page of the website |
| `/admin`           | Admin login and dashboard           |
| `/AddUpcoming`     | Add upcoming event details          |
| `/AddEventPhoto`   | Upload event photos                 |
| `/ContactPageData` | View user contact form responses    |

---

## 🛠️ Backend Routes (Node + Express)

### 🔑 Admin Routes

* `POST /api/admin/login` → Admin authentication

### 📅 Event Routes

* `POST /api/events/add-upcoming` → Add upcoming event
* `GET /api/events/upcoming` → Fetch upcoming events
* `GET /api/events/all` → Fetch all events

### 🖼️ Event Photo Routes

* `POST /api/photos/add` → Upload event photos
* `GET /api/photos/:eventId` → Get photos for a specific event

### 📞 Contact Routes

* `POST /api/contact/add` → Store user contact response
* `GET /api/contact/all` → Fetch all user responses (admin only)

---

## 🗄️ Tech Stack

### Frontend

* ⚛️ React.js
* 🎨 CSS / Bootstrap
* 🌐 Axios for API calls

### Backend

* 🟢 Node.js
* 🚂 Express.js

### Database

* 🍃 MongoDB (Mongoose)

---

## 🔐 Security & Best Practices

* Password‑protected admin routes
* Form‑based data handling (no hard‑coding)
* Clean separation of frontend and backend
* Scalable and maintainable architecture

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/innovixus.git

# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
node app.js
```

---

## 🎯 Project Objective

The goal of Innovixus is to provide a **professional, dynamic, and admin‑friendly platform** for managing a technical club’s online presence — making event management seamless and efficient.

---

## 👩‍💻 Developer

**Tanisha Trivedi**
Full‑Stack MERN Developer

---

✨ *Innovixus – Innovate. Explore. Excel.* ✨
