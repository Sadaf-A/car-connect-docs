# Setup Guide

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **MongoDB** (local or MongoDB Atlas for cloud)
- **npm** (Node Package Manager)
- **Vercel** account (for deployment)

### Step-by-Step Setup

#### 1. Backend Setup

1. Clone the repository and navigate to the backend directory.
    ```bash
    cd backend
    ```

2. Create a `.env` file in the backend directory to store all your sensitive information (such as API keys, MongoDB URI, etc.)

3. Install the backend dependencies.
    ```bash
    npm install
    ```

4. Start the backend server.
    ```bash
    npm run start
    ```

   This will run the server on `http://localhost:5001`.

#### 2. Frontend Setup

1. Navigate back to the main directory and install frontend dependencies.
    ```bash
    cd ..
    npm install
    ```

2. Start the frontend server.
    ```bash
    npm run start
    ```

   The frontend will be available at `http://localhost:3000`.

---

### Ports

- **Frontend:** `localhost:3000`
- **Backend:** `localhost:5001`
