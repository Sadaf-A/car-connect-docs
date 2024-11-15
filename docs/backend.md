# Backend Overview

The backend of Car Connect is built with **Node.js** and **MongoDB**. It handles API requests, user authentication, and data storage. The server runs on **Express.js**, and the API endpoints are designed to handle car-related operations.

### Folder Structure

```plaintext
backend/
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── car.js
│   └── user.js
├── routes/
│   ├── car.js
│   └── user.js
├── server.js
└── .env
```
### Key Files and Directories

- **models/**: Contains MongoDB models for Car and User.
  - **car.js**: Model for car data.
  - **user.js**: Model for user data.
- **middleware/authMiddleware.js**: Middleware for authentication.
- **routes/**: Contains routes for user and car-related operations.
  - **car.js**: Car routes (Create, List, Update, Delete).
  - **user.js**: User routes (Login, Signup).
