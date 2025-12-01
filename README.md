# TaskFlow API

A RESTful API for task management and team collaboration.

## Features

- User authentication
- Task creation and management
- Team workspaces
- Task assignments
- Comments and activity tracking

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see `.env.example`)

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `GET /api/tasks/:id` - Get specific task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile

## Data Models

### Task
- title (required)
- description
- status
- priority
- assignee
- dueDate
- tags

### User
- email (required)
- password (required)
- name
- role

## Error Handling

The API returns appropriate HTTP status codes and error messages.

## Testing

Run tests with:
```bash
npm test
```

## Notes

- Some endpoints require authentication
- Database schema may need updates for production
- See inline code comments for additional details
