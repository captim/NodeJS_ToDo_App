# ToDo Application

A simple and efficient ToDo application built with React (TypeScript) for the frontend and Node.js (Express) for the backend. This application allows users to manage tasks, including creating, viewing, updating, and deleting tasks. The app is designed with a clean and intuitive interface, and utilizes modern web development practices.

## Features

- **Add Tasks:** Users can create new tasks with a name and description.
- **View Tasks:** Users can view a list of all tasks.
- **Update Tasks:** Users can mark tasks as completed or update their details.
- **Delete Tasks:** Users can remove tasks from the list.
- **Responsive Design:** The application is fully responsive and works well on both desktop and mobile devices.
- **RESTful API:** A backend API that handles the tasks using Express.js and stores data in a database.

## Tech Stack

- **Frontend:** 
  - React.js
  - TypeScript
  - Material-UI
  - React Router
- **Backend:** 
  - Node.js
  - Express
  - TypeScript
  - PostgreSQL (or your choice of database)
- **Tools:**
  - Axios for HTTP requests
  - CORS for enabling cross-origin requests
  - Docker for containerization (if used)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (or any other database you prefer)

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/captim/NodeJS_ToDo_App
cd todo-app
Install dependencies for the server and client:
```
For the server:
```
cd server
npm install
```

For the client:
```
cd client
npm install
```

Set up environment variables for the server:

Create a .env file in the server directory with the following configuration:
```
PORT=3000
DB_NAME=node_todo_app_scheme
DB_USER=root
DB_PASSWORD=root
DB_HOST=127.0.0.1
DB_PORT=3306
```
Create a .env file in the client directory with the following configuration:
```
REACT_APP_API_URL=http://localhost:3000/
```
Run the application:

In one terminal window, run the server:
```
bash
Copy code
cd server
npm run dev
```

In another terminal window, run the React app:
```
bash
Copy code
cd client
npm run dev
```
The application should now be running at http://localhost:3000.

## Usage
Once the application is up and running, you can:

- Create Tasks: Use the input form to create new tasks with a name and description.
- View Tasks: All tasks are displayed in a list with their status (completed or not).
- Update Tasks: You can mark tasks as completed or edit them as needed.
- Delete Tasks: You can remove tasks from the list.

## API Endpoints
The backend exposes the following RESTful API endpoints:

- GET /api/tasks - Get all tasks.
- POST /api/tasks - Create a new task.
- PUT /api/tasks/:id - Update an existing task.
- DELETE /api/tasks/:id - Delete a task.
