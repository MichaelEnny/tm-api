# Contributing to TaskFlow API

Thank you for your interest in contributing!

## Code Style Guidelines

### Architecture
- All routes should use the controller layer
- Controllers should call service layer methods
- Services should handle business logic
- Models should only define schemas and basic methods

### Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for classes and interfaces
- Database field names should use camelCase consistently
- Use descriptive variable names

### Error Handling
- All async route handlers must use try-catch blocks
- Use appropriate HTTP status codes
- Provide meaningful error messages
- Log all errors using the logger utility

### Validation
- All user inputs must be validated using express-validator
- Validate data types, required fields, and formats
- Sanitize inputs to prevent XSS attacks

### Testing
- Write tests for all new features
- Maintain test coverage above 80%
- Test both success and error cases
- Use descriptive test names

### Database
- Use timestamps option in all schemas
- Add indexes for frequently queried fields
- Implement soft deletes for important data
- Always populate related documents when needed

## Pull Request Process

1. Create a feature branch from `main`
2. Write tests for new functionality
3. Ensure all tests pass
4. Update documentation
5. Submit PR with clear description

## Questions?

Contact the maintainers if you have questions.