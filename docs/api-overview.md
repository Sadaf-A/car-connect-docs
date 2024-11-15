# API Overview

This document provides a comprehensive overview of the Car Connect API. The API allows users to register, log in, and manage cars. It follows the OpenAPI Specification (OAS) 3.0 for clear and consistent API design.

## Authentication Endpoints

### API Responses

#### 1. **Register a New User** (`POST /api/auth/register`)

| **Code** | **Description**             |
|----------|-----------------------------|
| 201      | User registered successfully |
| 400      | Invalid input               |
| 500      | Internal Server Error       |

#### 2. **Login a User** (`POST /api/auth/login`)

| **Code** | **Description**                       |
|----------|---------------------------------------|
| 200      | Successful login with token           |
| 401      | Invalid credentials                   |
| 500      | Internal Server Error                 |

#### 3. **Get a Specific Car by ID** (`GET /api/cars/get-car/{id}`)

| **Code** | **Description**           |
|----------|---------------------------|
| 200      | Car details               |
| 404      | Car not found             |
| 500      | Internal Server Error     |

#### 4. **Delete a Car** (`DELETE /api/cars/delete-car/{id}`)

| **Code** | **Description**             |
|----------|-----------------------------|
| 200      | Car deleted successfully    |
| 404      | Car not found               |
| 500      | Internal Server Error       |

#### 5. **Update Car Details** (`PUT /api/cars/update-car/{id}`)

| **Code** | **Description**             |
|----------|-----------------------------|
| 200      | Car updated successfully    |
| 400      | Invalid input               |
| 404      | Car not found               |
| 500      | Internal Server Error       |

#### 6. **Get All Cars** (`GET /api/cars/get-cars`)

| **Code** | **Description**             |
|----------|-----------------------------|
| 200      | List of all cars            |
| 500      | Internal Server Error       |

#### 7. **Create a New Car** (`POST /api/cars/create-car`)

| **Code** | **Description**             |
|----------|-----------------------------|
| 201      | Car created successfully     |
| 400      | Invalid input               |
| 500      | Internal Server Error       |


