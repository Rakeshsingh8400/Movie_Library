# Movie Library Web Application

## Overview

This is a full-stack movie library web application where users can sign up, log in, search for movies, and create lists of their favorite movies. The application uses the OMDB API to fetch movie details. Users can create public or private lists of movies similar to YouTube playlists.

## Features

1. User Authentication (Sign In/Sign Up).
2. Movie search functionality using the OMDB API.
3. Creation of public and private movie lists.
4. Viewing and managing movie lists on the home page.
5. Responsive and user-friendly UI.

## Tech Stack

### Frontend
- React
- React Router
- Context API for state management
- Axios for API calls
- CSS for styling

### Backend
- Node.js
- Express
- MongoDB with Mongoose for database management
- JWT for authentication
- Bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- MongoDB (local or Atlas)
- OMDB API Key

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/movielibrary.git
cd movielibrary


Backend Setup
Navigate to the backend directory:
cd backend

Install backend dependencies:
npm install

Create a .env file in the backend directory and add the following environment variables:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:

npm start
The backend server will run on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

cd frontend
Install frontend dependencies:

npm install
Create a .env file in the frontend directory and add the following environment variable:

REACT_APP_API_URL=http://localhost:5000
Start the frontend development server:

npm start
The frontend server will run on http://localhost:3000.

Usage
Open your browser and navigate to http://localhost:3000.
Register a new account or log in with an existing account.
Use the search bar to find movies and add them to your lists.
View and manage your movie lists from the home page.
