# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication

Most endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### POST /auth/register
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

**Response:** 201 Created
```json
{
  "message": "User created successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

#### POST /auth/login
Login existing user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Tasks

#### GET /tasks
Get all tasks. Requires authentication.

**Response:** 200 OK
```json
[
  {
    "id": "task_id",
    "title": "Task title",
    "status": "pending",
    "createdBy": "user_id"
  }
]
```

#### POST /tasks
Create a new task. Requires authentication.

**Request Body:**
```json
{
  "title": "New task",
  "description": "Task description",
  "priority": "high"
}
```

#### PUT /tasks/:id
Update a task.

(Documentation incomplete...)

#### DELETE /tasks/:id
Delete a task.

(Documentation incomplete...)

### Users

#### GET /users/profile
Get current user profile. Requires authentication.

(Documentation incomplete...)

## Status Codes

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Error Response Format

(To be documented...)

## Rate Limiting

(To be documented...)

## Notes

- Some endpoints may return different fields than documented
- Status values may vary (check code for current implementation)
- Pagination is not yet implemented