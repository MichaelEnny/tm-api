# TaskFlow API - Codebase Summary

## Overview
This is a Node.js/TypeScript REST API for task management with **intentional gaps, inconsistencies, and ambiguities** designed for AI model evaluation on ambiguous coding tasks.

## Project Statistics
- **Files:** ~35 files
- **Lines of Code:** ~1,800 lines
- **Language:** TypeScript/Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose

## Project Structure

```
Task_04/
├── src/
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── controllers/      # Controllers (partially implemented)
│   ├── services/         # Business logic layer (incomplete)
│   ├── middleware/       # Authentication, validation, errors
│   ├── utils/            # Helper functions
│   ├── config/           # Configuration constants
│   ├── types/            # TypeScript type definitions
│   ├── scripts/          # Database seed scripts
│   ├── __tests__/        # Test files (partial coverage)
│   ├── app.ts            # Express app setup
│   └── server.ts         # Server entry point
├── package.json
├── tsconfig.json
├── .env.example
├── README.md
├── CONTRIBUTING.md
├── API_DOCUMENTATION.md
├── CHANGELOG.md
└── docker-compose.yml
```

## Intentional Gaps and Ambiguities

### 1. Architectural Inconsistencies

**Issue:** Mixed architectural patterns
- CONTRIBUTING.md says to use Controller → Service → Model pattern
- Most routes call models directly (ignoring controllers)
- TaskController exists but isn't used
- TaskService exists but only partially implemented

**Files affected:**
- src/routes/task.routes.ts - calls models directly
- src/controllers/task.controller.ts - exists but not used
- CONTRIBUTING.md:12-15 - specifies unused pattern

### 2. Naming Convention Inconsistencies

**Issue:** Inconsistent database field naming
- User model uses camelCase with `timestamps: true` (createdAt, updatedAt)
- Task model uses snake_case manually (created_at, updated_at)
- CONTRIBUTING.md specifies camelCase should be used consistently

**Files affected:**
- src/models/User.ts:26 - uses timestamps: true
- src/models/Task.ts:28-35 - manual snake_case fields
- CONTRIBUTING.md:21-24

### 3. Incomplete Error Handling

**Issue:** Inconsistent try-catch usage
- Some routes have try-catch blocks
- Others are missing error handling
- CONTRIBUTING.md says all async handlers must use try-catch

**Files affected:**
- src/routes/auth.routes.ts:38-66 - login missing try-catch
- src/routes/task.routes.ts:18-28 - GET /:id missing try-catch
- src/routes/task.routes.ts:70-80 - DELETE missing try-catch
- src/routes/user.routes.ts:20-36 - PUT missing try-catch

### 4. Missing Validation

**Issue:** Incomplete input validation
- No validation middleware used in most routes
- validateTaskCreation exists but missing priority/status validation
- Login validation completely missing
- Status values not validated against enum

**Files affected:**
- src/middleware/validation.middleware.ts:23-29 - incomplete task validation
- src/middleware/validation.middleware.ts:31 - login validation missing
- src/routes/auth.routes.ts:38 - no validation used
- src/routes/task.routes.ts - no validation middleware applied

### 5. Status Value Ambiguity

**Issue:** Inconsistent status values across codebase
- config/constants.ts defines: pending, in-progress, completed
- README.md mentions status field but doesn't specify values
- CHANGELOG.md mentions "cancelled" status
- validators.ts validates: pending, in-progress, completed (no cancelled)
- No enum validation in Task model

**Files affected:**
- src/config/constants.ts:4-7
- src/models/Task.ts:20 - no enum validation
- src/utils/validators.ts:18-21
- CHANGELOG.md:43

### 6. Missing Features Referenced in Documentation

**Issue:** Documentation mentions features not fully implemented
- README mentions "Comments and activity tracking"
- Comment model exists but no routes for it
- API_DOCUMENTATION.md incomplete
- Task deletion doesn't cascade to comments

**Files affected:**
- README.md:7 - mentions comments feature
- src/models/Comment.ts - model exists
- No src/routes/comment.routes.ts file
- src/routes/task.routes.ts:70-80 - delete doesn't handle comments

### 7. Authorization Missing

**Issue:** No ownership or permission checks
- Any authenticated user can delete/update any task
- No check if user is task creator or has permission
- README mentions "role" field but no role-based access control

**Files affected:**
- src/routes/task.routes.ts:47-68 - update has no ownership check
- src/routes/task.routes.ts:70-80 - delete has no ownership check
- src/middleware/auth.middleware.ts:24-26 - TODO for role-based auth

### 8. Test Coverage Gaps

**Issue:** Incomplete test suite
- Test files exist but most tests are TODOs
- No integration tests
- CONTRIBUTING.md requires 80% coverage but tests are incomplete

**Files affected:**
- src/__tests__/auth.test.ts - placeholder tests
- src/__tests__/task.test.ts - minimal tests
- Missing test files for users, middleware, services

### 9. Updated Timestamp Not Updated

**Issue:** Task model updated_at field not automatically updated
- Model defines updated_at manually
- No pre-update hook to update the timestamp
- Comment in model says "TODO: Add pre-update hook"

**Files affected:**
- src/models/Task.ts:35-38
- src/models/Task.ts:46 - TODO comment

### 10. Priority Validation Missing

**Issue:** Priority field lacks validation
- constants.ts defines valid priorities
- validators.ts has no priority validator
- validation.middleware.ts has TODO for priority validation
- Task model accepts any string for priority

**Files affected:**
- src/config/constants.ts:13-17
- src/utils/validators.ts:27 - missing implementation
- src/middleware/validation.middleware.ts:25 - TODO comment

## Potential Ambiguous Tasks

This codebase can be used for various ambiguous task categories:

### Underspecified Requirements
- "Add validation to the API"
- "Implement error handling"
- "Add authorization"
- "Fix the timestamps"
- "Improve the architecture"

### Contextual Ambiguity
- "Follow the existing pattern for routes" (which pattern? direct model access or controller/service?)
- "Use the same naming convention" (camelCase or snake_case?)
- "Fix the status validation" (which status values are valid? is cancelled valid?)
- "Implement the missing features from the README"

### Interpretation Ambiguity
- "Add pagination" (offset-based? cursor-based? page size?)
- "Make the code follow the contributing guidelines" (which violations to fix?)
- "Complete the test suite" (what coverage? which files?)

### Conflicting Requirements
- "Keep the existing code structure but follow CONTRIBUTING.md" (contradictory)
- "Add features without changing database schema" (may be impossible)

### False Ambiguity
- "Fix the task status bug" (README and constants.ts actually specify valid values)
- "Use the validation that's already set up" (validation exists but isn't applied)

## How to Use This Codebase

1. Select an ambiguity category from the project understanding document
2. Craft a task based on the gaps identified above
3. Evaluate how models handle the ambiguity
4. Check if models:
   - Acknowledge the ambiguity
   - Ask relevant clarifying questions
   - State assumptions explicitly
   - Make reasonable interpretations

## Example Ambiguous Task

**Task:** "Add proper validation to the task routes"

**Ambiguities:**
- Which routes? (create, update, all of them?)
- What validation? (status, priority, required fields, data types?)
- Should existing validation middleware be used or new validators created?
- Should validation follow patterns in auth routes?
- What about the TODOs in validation.middleware.ts?

**Good Response:** Model would ask about scope, notice existing incomplete validation, point out the TODOs, and propose specific validation rules while stating assumptions.

**Poor Response:** Model would add basic validation without acknowledging gaps, inconsistencies, or asking about the incomplete validation.middleware.ts file.

## Notes

- This codebase intentionally has issues and is not production-ready
- All gaps and inconsistencies are documented here for evaluation purposes
- The code is syntactically correct and can be built/run
- Use this summary to verify model responses against ground truth