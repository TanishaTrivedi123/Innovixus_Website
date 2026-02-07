# 🚀 Innovixus – Technical Club Website

🚀 Innovixus – Technical Club Website
Innovixus is a full-stack MERN-based technical club website built to manage and showcase club events, activities, and announcements in a dynamic and scalable way.
The platform allows users to explore events and contact the club, while admins can securely manage content through a dedicated admin panel — without repetitive hardcoding.

✨ Features
👥 User Side
📅 View upcoming events
🗂️ Browse all events
🖼️ Event photo gallery
📖 About the technical club
📩 Contact form for queries and feedback
🔐 Admin Panel
🔑 Secure Admin Authentication
➕ Add & manage Upcoming Events
🖼️ Upload Event Photos dynamically
📬 View User Contact Responses
⚙️ Form-based content management (no hardcoding)
🛠️ Tech Stack
Frontend

React.js
React Router
CSS / Bootstrap
Backend

Node.js
Express.js
Database

MongoDB
Architecture

RESTful APIs
Protected admin routes
MERN full-stack structure
🌐 API Endpoints
📌 Public Routes
Method	Endpoint	Description
GET	/api/events	Fetch all events
GET	/api/upcoming	Retrieve upcoming events
POST	/api/contact	Submit contact form data
🔐 Protected Admin Routes
Method	Endpoint	Description
POST	/api/admin/login	Admin authentication
POST	/api/admin/event	Add new upcoming event
POST	/api/admin/photo	Upload event photos
GET	/api/admin/contacts	Fetch user contact submissions
🧭 Application Routes (Frontend)
Route	Purpose	Description
/admin	🔐 Login Page	Secure authentication for admin access
/admin/EnterPage	🏠 Dashboard	Main admin control panel with action buttons
/admin/AddUpcoming	📅 Add Events	Form to create and publish upcoming events
/admin/AddEventPhoto	📸 Upload Photos	Interface to add event gallery photos
/admin/ContactPageData	📬 View Responses	Access user contact form submissions
🔐 Admin Workflow
Navigate to /admin
Enter admin password
Access admin dashboard
Perform actions:
Add upcoming events
Upload event photos
View user responses
✔️ Secure
✔️ Dynamic
✔️ Scalable

📸 Why This Project?
Designed for real technical club requirements
Eliminates manual UI updates
Demonstrates complete MERN stack skills
Clean separation of user & admin roles
Shows authentication & dashboard logic
🚧 Future Enhancements
🔐 JWT-based authentication
🧑‍🤝‍🧑 Role-based admin access
☁️ Cloud image storage (Cloudinary / AWS S3)
📈 Admin analytics dashboard
🎨 Improved UI/UX
👨‍💻 Developer
Ansh Pandey
Full-Stack Developer (MERN)
📌 Focused on building scalable & real-world web applications

⭐ If you like this project, don’t forget to give it a star!
