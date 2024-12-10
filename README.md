Bookstore Application
A MERN stack application to manage a simple bookstore, allowing users to search for books and view their details.

Project Setup
This repository contains both the frontend and backend of the bookstore application. Follow the steps below to set up both parts of the application and run them locally.

Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
pnpm (for managing dependencies)
If you don’t have pnpm installed, you can install it globally via npm:

npm install -g pnpm
Backend Setup
The backend is built using Express and MongoDB for managing books.

Navigate to the backend directory:

cd backend
Install dependencies:

pnpm install
Start the backend server:

node server.js
The backend server will be running on http://localhost:5000 by default. This is where all the book-related API routes will be available.

Frontend Setup
The frontend is built with React and Material-UI for the UI components.

Navigate to the frontend directory:
cd frontend

Install dependencies:
pnpm install

Start the frontend development server:
pnpm start

The frontend server will be running on http://localhost:3000 by default. It will communicate with the backend to fetch and display book data.

Running Both Servers Together
For both servers (frontend and backend) to work together, you need to run them simultaneously in separate terminal windows or tabs.

Backend: node server.js (in the backend directory)
Frontend: pnpm start (in the frontend directory)

Project Structure
-backend/: Contains the backend application (Express server, routes, models).
-frontend/: Contains the frontend application (React components, UI).

Features
-Search Functionality: Users can search for books by title, author, category, or description.
-Book Details: Users can view detailed information about a selected book.
-Responsive Design: The frontend is fully responsive for various screen sizes, from mobile to desktop.
-Built With
-Backend: Node.js, Express.js, MongoDB
-Frontend: React.js, Material-UI, Axios
-State Management: Redux (for managing app state in frontend)
