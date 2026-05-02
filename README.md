# 🚀 Day-10-n – Full-Stack Development with Node.js & Express.js

This project is part of my full-stack development journey, where I practiced building structured applications using Node.js and Express.js for the backend, integrated with a frontend to improve code organization and handle real-world development concepts.

## ⚙️ Tech Stack
*   **Frontend**: React.js / HTML & CSS.
*   **Backend**: Node.js and Express.js.
*   **JavaScript (ES6)**: The primary programming language for application logic.
*   **MongoDB**: Integrated for database storage, managed via environment variables.

## 📦 Packages Used
### Backend Dependencies
*   **express**: Fast, unopinionated, minimalist web framework for Node.js.
*   **mongoose**: Elegant MongoDB object modeling for Node.js to manage database schemas.
*   **dotenv**: Zero-dependency module that loads environment variables from a `.env` file.
*   **cors**: Middleware to enable Cross-Origin Resource Sharing for frontend-backend communication.
*   **nodemon**: Utility that automatically restarts the server when code changes are detected.

### Frontend Dependencies
*   **react**: A JavaScript library for building user interfaces.
*   **react-dom**: Entry point to the DOM for React.
*   **axios**: Promise-based HTTP client used to call backend APIs.

## 📚 What I Learned
*   **Advanced Folder Architecture**: Mastered the organization of a professional Full-Stack project using a clean separation of concerns with dedicated `frontend` and `backend` directories.
*   **MVC Pattern Basics**: Started implementing the Model-View-Controller pattern by separating database schemas (`models`), request logic (`controllers`), and endpoints (`routes`).
*   **Database Troubleshooting**: Successfully resolved persistent connection issues like the `querySrv ECONNREFUSED` error by correctly configuring DNS settings and MongoDB Atlas connection strings.
*   **Environment Security**: Learned to protect sensitive information like database credentials using `.env` files and `dotenv`.
*   **Cross-Origin Communication**: Implemented `cors` to allow my React frontend to securely fetch data from my Express backend.
*   **Modular API Design**: Gained experience defining multiple API routes and using Express middleware to process data during the request-response cycle.

## ✨ Features
*   **Full-Stack Folder Structure**: Organized project into separate `frontend` and `backend` directories.
*   **Express server setup**: Clean and modular server initialization within the backend.
*   **Multiple API endpoints**: Organized route handling within the `backend/src/` directory.
*   **Middleware usage**: Efficient processing of incoming requests.
*   **JSON request handling**: Capability to parse and respond with structured JSON data.

## 📂 Project Structure
Below is the refined and proper file structure for **akhilsam-webdev/Day-10-n**:

```text
Day-10-n/
├── backend/
│   ├── src/
│   │   ├── config/      # Database connection and environment config
│   │   ├── controllers/ # Logic for handling API requests
│   │   ├── models/      # Mongoose schemas/models for MongoDB
│   │   ├── routes/      # Definition of API endpoints
│   │   ├── middleware/  # Custom Express middleware
│   │   └── app.js       # Express application setup
│   ├── .env             # Environment variables (DB_URL, PORT)
│   ├── .gitignore       # Ignore node_modules and .env
│   ├── package.json     # Backend dependencies and scripts
│   └── server.js        # Entry point to start the HTTP server
├── frontend/
│   ├── public/          # Static assets (index.html, icons)
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── services/    # API calling logic (Axios instances)
│   │   ├── App.js       # Main React component
│   │   └── index.js     # React entry point
│   ├── .gitignore       # Ignore node_modules
│   ├── package.json     # Frontend dependencies and scripts
│   └── README.md        # Frontend documentation
└── README.md            # Root project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/akhilsam-webdev/Day-10-n
cd Day-10-n
```

### 2️⃣ Install Dependencies
**For Backend:**
```bash
cd backend
npm install
```

**For Frontend:**
```bash
cd ../frontend
npm install
```

### 3️⃣ Run the Project
**Start Backend:**
```bash
cd backend
npm start
```

**Start Frontend:**
```bash
cd frontend
npm start
```

---

## 👨‍💻 Author
**Akhil Sambasivan**
*   **GitHub**: [https://github.com/akhilsam-webdev](https://github.com/akhilsam-webdev)

## 🔗 Repository
👉 [https://github.com/akhilsam-webdev/Day-10-n](https://github.com/akhilsam-webdev/Day-10-n)

## ⭐ Support
If you found this helpful, consider giving a ⭐ to the repo!
