# Node.js PostgreSQL API

A RESTful API built with Node.js and Express, using PostgreSQL running on docker container with basic Joi validation for data persistence. This project implements a complete CRUD (Create, Read, Update, Delete) API for user management with proper validation, error handling, and a clean architecture.

## Features

- **RESTful API Design**: Follows REST principles for predictable and standard endpoints
- **PostgreSQL Integration**: Robust database connection using the `pg` package
- **Environment Variable Management**: Uses dotenv for configuration management
- **Input Validation**: Request validation using Joi
- **Error Handling**: Centralized error handling middleware
- **Project Structure**: Organized using MVC (Model-View-Controller) architecture

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn


The server will start on the port specified in your .env file (defaults to 3000 if not specified).

## API Endpoints

### Users

| Method | Endpoint     | Description                |
|--------|--------------|----------------------------|
| GET    | /api/user    | Get all users              |
| GET    | /api/user/:id| Get user by ID             |
| POST   | /api/user    | Create a new user          |
| PUT    | /api/user/:id| Update user information    |
| DELETE | /api/user/:id| Delete a user              |

## Request & Response Examples

### Create a new user

**Request:**
```http
POST /api/user
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2025-03-17T12:00:00.000Z"
  }
}
```

### Get all users

**Request:**
```http
GET /api/user
```

**Response:**
```json
{
  "status": 200,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2025-03-17T12:00:00.000Z"
    }
  ]
}
```

## Project Structure

```
src/
│
├── config/
│   └── db.js                  # Database configuration
│
├── controllers/
│   └── userController.js      # User controller functions
│
├── data/
│   ├── createUserTable.js     # Table creation script
│   └── data.sql               # SQL schema definitions
│
├── middlewares/
│   ├── errorHandler.js        # Error handling middleware
│   └── inputValidator.js      # Request validation middleware
│
├── models/
│   └── userModel.js           # User model and database operations
│
├── routes/
│   └── userRoutes.js          # API routes definition
│
└── index.js                   # Application entry point
```

## Error Handling

The API uses a centralized error handling middleware that catches all errors and returns a standardized response. Specific error types are handled appropriately to provide meaningful feedback.

## Validation

Input validation is performed using Joi, ensuring that all requests contain the required fields with the correct format before processing.

## License

[MIT](LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
