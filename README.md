# QA Automation Challenge: Task Management API

Welcome to the QA Automation Challenge. Your goal is to automate the testing of a simple Task Management API and identify any defects in the implementation.

## Prerequisites

This project requires **Node.js** and **npm** (Node Package Manager) to be installed on your machine.

- **Check if installed:**
  ```bash
  node -v
  npm -v
  ```
- **Installation via Terminal:**
  
  **On Linux (Ubuntu/Debian):**
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```
  
  **On macOS (using Homebrew):**
  ```bash
  brew install node
  ```

- **Alternative (Universal):**
  Download the installer from [nodejs.org](https://nodejs.org/).

## Project Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the application:**
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:3000`.
   Interactive API documentation (Swagger) is available at `http://localhost:3000/api`.

## API Documentation

### 1. Get All Tasks
- **URL:** `GET /tasks`
- **Response:** `200 OK` with an array of tasks.

### 2. Create Task
- **URL:** `POST /tasks`
- **Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "priority": 3
  }
  ```
- **Response:** `201 Created` with the new task object.

### 3. Get Task by ID
- **URL:** `GET /tasks/:id`
- **Response:** `200 OK` or `404 Not Found`.

### 4. Update Task Status
- **URL:** `PATCH /tasks/:id/status`
- **Body:** `{ "status": "DONE" }`
- **Response:** `200 OK` with the updated task.

### 5. Delete Task
- **URL:** `DELETE /tasks/:id`
- **Response:** `200 OK`.

---

## Your Task

1. **Automation:** Create an automated test suite that covers all CRUD operations.
2. **Bug Reporting:** There are at least **4 intentional bugs** in this application. Your tests should be able to catch them. Document your findings in a brief report.
3. **Edge Cases:** Don't forget to test negative scenarios and boundary values.

Good luck!
