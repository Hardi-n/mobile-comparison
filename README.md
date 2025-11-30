# Smartphone Analytics Project

This project is a **Smartphone Analytics Dashboard** that analyzes phone data such as performance (AnTuTu scores), price, battery, RAM, camera quality, user ratings, storage options, and reviews. The data is fetched from a **MySQL database** via a **Node.js backend** and displayed in a **React frontend**.

---

## 🔧 Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [React](https://reactjs.org/) (via Create React App or Vite)

---

## 🗄 Database Setup

1. **Start MySQL Server**:

   Make sure your MySQL server is running on **port 3306**.

2. **Create Database and Table**:

   ```sql
   CREATE DATABASE smartphone_db;

   USE smartphone_db;

   CREATE TABLE smartphones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    device VARCHAR(255),
    processor VARCHAR(255),
    ram VARCHAR(100),
    storage VARCHAR(100),
    battery VARCHAR(100),
    price INT,
    antutu_score INT,
    category VARCHAR(255),
    value_score FLOAT,
    rating FLOAT,
    height VARCHAR(100),
    website_url TEXT,
    image_url TEXT,
    upvotes INT,
    reviews INT,
    camera VARCHAR(255)
   );
   ```

Insert your data into the phones table using your preferred method (CSV import, SQL insert statements, or MySQL Workbench).

🖥 Backend Setup (Node.js + Express)

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Configure database connection in db.js:

import mysql from "mysql2";

export const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "your_mysql_password",
database: "smartphone_db",
port: 3306
});

Start the backend server:

npm start

The backend runs on port 5000.

Available API endpoints:

GET /phones → fetch all phones

GET /phones/:id → fetch a phone by ID

GET /phones/search?q=query → search phones by brand

🌐 Frontend Setup (React)

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the frontend:

npm start

The frontend runs on port 3173.

Connect frontend with backend:

All API calls in the frontend should point to http://localhost:5000/phones or other backend endpoints.

🚀 Running the Project

Start MySQL server on port 3306.

Start backend on port 5000.

Start frontend on port 3173.

Open the browser at http://localhost:3173
to see the analytics dashboard.

📦 Project Structure

```structure
project-root/
│
├─ backend/
│ ├─ controllers/phonesController.js
│ ├─ routes/phonesRoutes.js
│ ├─ db.js
│ └─ server.js
│
├─ frontend/
│ ├─ src/
│ │ ├─ components/
│ │ ├─ pages/
│ │ └─ App.jsx
│ └─ package.json
│
└─ README.md
```

⚡ Notes

Ensure ports do not conflict: backend 5000, frontend 3173, MySQL 3306.

Numeric fields like rating, price, battery, etc., are stored as strings in the database. Convert them to numbers in React using parseFloat() or helper functions.

You can create additional backend endpoints to fetch metrics like most-reviewed or best-camera phones directly from SQL, which improves performance by reducing frontend calculations.
