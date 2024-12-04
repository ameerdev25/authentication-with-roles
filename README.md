

# Authentication Service With Roles

A Node.js authentication service using Express, Sequelize, and JSON Web Tokens (JWT).

## Table of Contents

* [Features](#features)
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [API Documentation](#api-documentation)
* [Contributing](#contributing)
* [License](#license)

## Features

* User authentication using username and password
* JSON Web Token (JWT) based authentication
* Role-based access control (admin or user)
* Sequelize integration for database management

## Requirements

* Node.js (version 14 or higher)
* PostgreSQL database
* Sequelize (version 6 or higher)
* Express (version 4 or higher)
* JSON Web Tokens (version 9 or higher)

## Installation

1. Clone the repository: `git clone https://github.com/ameerdev25/authentication-with-roles.git`
2. Install dependencies: `npm install`
3. Create a PostgreSQL database and update the `config/database.ts` file with your database credentials
4. Update the `scripts/insertTestData.ts` file with your credentials to insert some dummy data to the database with bcrypt incryption.
5. Run `npm run insert-test-data` to initiate the test data insertion to database.

## Usage

1. Start the server: `npm run dev`
2. Use a tool like Postman or cURL to send requests to the API endpoints

## API Documentation

### Login

* Endpoint: `/auth/login`
* Method: `POST`
* Request Body:
	+ `username`: string
	+ `password`: string
* Response:
	+ `token`: string (JWT token)

### Example Use Case

* Send a `POST` request to `/auth/login` with the following request body:
```json
{
  "username": "johnDoe",
  "password": "password123"
}
```
* Receive a JWT token in the response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
