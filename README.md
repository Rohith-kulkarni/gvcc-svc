## Products-store Backend (Node.js + Express + SQLite)

A clean and modular backend service built using Node.js, Express, and SQLite, following a layered architecture:

✔ Controllers
✔ Services
✔ Routes
✔ Middlewares
✔ Config (DB setup)

This backend powers your product listing system, admin login, and customer enquiries.

## Project Structure (Actual)

Products-Store-svc/
│── node_modules/
│── src/
│ ├── config/
│ │ └── db.js
│ │
│ ├── controllers/
│ │ ├── admin.controllers.js
│ │ ├── auth.controllers.js
│ │ └── users.controllers.js
│ │
│ ├── middlewares/
│ │ └── auth.middleware.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── enquiries.routes.js
│ │ └── users.routes.js
│ │
│ ├── services/
│ │ ├── admin.services.js
│ │ ├── auth.services.js
│ │ ├── users.services.js
│ │ ├── index.js
│ │ └── products.js
│ │
│ └── index.js ← Main entry file
│
├── data.db ← SQLite database
├── .env
├── .gitignore
├── package.json
└── package-lock.json

This structure follows a clean separation of concerns:

Controllers → Handle HTTP request/response

Services → Business logic

Routes → API endpoints

Middlewares → Authentication (JWT)

Config → Database connection

## Technologies Used

Node.js

Express.js

SQLite3

JWT Authentication

Bcrypt Password Hashing

Dotenv

CORS

## Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/your-username/GVCC-SVC.git
cd GVCC-SVC

2️⃣ Install dependencies
npm install cors express bcrypt jsonwebtoken sqlite sqlite3

3️⃣ Create your .env file
PORT=5000
JWT_SECRET=your_secret_key_here

4️⃣ Start the server

Development mode:

npm run dev

Production:

npm start

API server will run on:
👉 http://localhost:5000

## API Endpoints

# Authentication

Method Endpoint Description
POST /login Admin login

# Users (Products)

Method Endpoint Description
GET /products/:page/:limit/:search/:category Fetch products list

# Enquiries

Method Endpoint Description
POST /enquiry/:product_id Add customer enquiry
GET /enquiries Fetch all enquiries (admin only)

# JWT Authentication Flow

1. Admin logs in using /login

2. Backend returns a JWT token

3. Frontend stores token in browser localStorage

4. Protected endpoints require:

Authorization: Bearer <token>

Middleware used:
src/middlewares/auth.middleware.js

## Database (SQLite)

Database file: data.db

# Enquiries Table Schema

CREATE TABLE IF NOT EXISTS enquiries (
id INTEGER PRIMARY KEY AUTOINCREMENT,
product_id INTEGER NOT NULL,
name TEXT NOT NULL,
email TEXT NOT NULL,
phone TEXT,
message TEXT NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (product_id) REFERENCES products(id)
);

# Products Table Schema

CREATE TABLE IF NOT EXISTS products (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
category TEXT,
short_desc TEXT,
long_desc TEXT,
price DECIMAL(10, 2),
image_url TEXT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

# Admins Table Schema

CREATE TABLE IF NOT EXISTS admins (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
password_hash TEXT NOT NULL,
email TEXT UNIQUE NOT NULL
);

You can extend the schema as needed.

# Scripts

"scripts": {
"start": "node src/index.js",
"dev": "nodemon src/index.js"
}

## Products seed

All the sample products are stored in this file (products.js). In order to seed the sample products in db, run the following command. Paste the list of products into this file under products variable.

node src/products.js

## Assumptios and Trade Off

Only admin users can signup and login currently

## Future Improvements

Login and Signup can be added to all users

Role based access can be given to users

Admin users can add products

Can convert to ecommerce application by adding cart and payment options
