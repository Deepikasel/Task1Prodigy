🚀 Prodigy Internship – Task 01: REST API with CRUD Operations
💡 Project Overview

As part of my ProDigy Internship, I developed a RESTful API for managing a users resource using Node.js and Express.js. This project focuses on backend fundamentals, clean design, and proper data handling.

Each user includes the following properties:

id: Unique UUID

name: User’s full name

email: User’s email (validated)

age: Positive integer

The API uses an in-memory storage (Map()) for fast, simple data management and includes robust input validation and error handling.

✨ Key Features

✅ Full CRUD functionality (Create, Read, Update, Delete)

✅ Input validation: Email format & positive age numbers

✅ Proper HTTP status codes: 201, 400, 404

✅ Clean, modular Express.js routing

✅ In-memory storage with Map() for simplicity & speed

🛠 Endpoints Overview
Method	Endpoint	Description
POST	/users	Create a new user
GET	/users	Get all users
GET	/users/:id	Get user by ID
PUT	/users/:id	Update user details
DELETE	/users/:id	Delete a user
GET	/	Welcome message
⚡ Example Requests

Create a new user

POST /users
{
  "name": "Deepika",
  "email": "deepika@example.com",
  "age": 22
}


Get all users

GET /users


Update a user

PUT /users/:id
{
  "name": "Deepika S",
  "email": "deepika.s@example.com",
  "age": 23
}


Delete a user

DELETE /users/:id

🛠 Technologies & Tools

Node.js – Server-side JavaScript runtime

Express.js – Minimalist web framework for APIs

UUID – Unique identifier for users

Validator.js – Email validation

Map() – In-memory storage for fast operations

🚀 Skills & Learnings

REST API design & implementation

Input validation & proper error handling

HTTP status code best practices

Modular and maintainable Express.js architecture

👩‍💻 Author

Deepika S. – Prodigy Internship Participant
