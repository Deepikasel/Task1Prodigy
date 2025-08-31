Prodigy Internship – Task 01: REST API with CRUD Operations
Overview

This project is part of my Prodigy Internship. It demonstrates a RESTful API for managing a users resource using Node.js and Express.js.

Each user has the following fields:

id (UUID)

name

email

age

The API uses in-memory storage with a JavaScript Map() object, along with input validation and proper status code handling.

Features

CRUD Operations:

Create: Add new users

Read: Retrieve all users or a single user by ID

Update: Modify user details

Delete: Remove a user

Validation:

Email validation using the validator library

Age validation (must be a positive number)

Error Handling:

400 – Bad request (invalid input)

404 – User not found

201 – Resource created successfully

Clean Express.js routing for maintainable code

Endpoints
Method	Endpoint	Description
POST	/users	Create a new user
GET	/users	Retrieve all users
GET	/users/:id	Retrieve a user by ID
PUT	/users/:id	Update a user's details
DELETE	/users/:id	Delete a user
GET	/	Welcome page
Installation

Clone the repository:

git clone <your-repo-url>


Navigate to the project directory:

cd task1prodigy


Install dependencies:

npm install


Start the server:

node server.js


The API will run on:

http://localhost:3000

Usage Example

Create a user:

POST /users
{
  "name": "Deepika",
  "email": "deepika@example.com",
  "age": 22
}


Retrieve all users:

GET /users


Retrieve a single user by ID:

GET /users/:id


Update a user:

PUT /users/:id
{
  "name": "Deepika S",
  "email": "deepika.s@example.com",
  "age": 23
}


Delete a user:

DELETE /users/:id

Technologies Used

Node.js

Express.js

UUID for unique user IDs

Validator for email validation

JavaScript Map() for in-memory storage

Author

Deepika S. – Prodigy Internship Participant

