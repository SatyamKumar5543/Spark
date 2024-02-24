# Social Media Dashboard Application

This is a Social Media Dashboard application built using React for the frontend and Django for the backend.

## Table of Contents

1. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
2. [Folder Structure](#folder-structure)
3. [Features](#features)
4. [Usage](#usage)
5. [Backend API](#backend-api)
6. [Contributing](#contributing)

## Getting Started

### Prerequisites

- Node.js
- Python
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/social-media-dashboard.git
    cd social-media-dashboard
    ```

2. Install dependencies:

    ```bash
    # Install frontend dependencies
    cd frontend
    npm install

    # Install backend dependencies
    cd ../backend
    pip install -r requirements.txt
    ```

3. Configure the MongoDB connection:

    Update the `connect.py` file with your MongoDB connection details.

## Folder Structure

- `frontend`: Contains the React application.
- `backend`: Contains the Django backend.

## Features

- View total likes, shares, comments, and posts analytics.
- Display post details, including likes, shares, and comments.

## Usage

1. Start the backend server:

    ```bash
    cd backend
    python manage.py runserver
    ```

2. Start the frontend application:

    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and go to `http://localhost:3000` to access the application.

## Backend API

### `GET /api/analytics/`

- Fetch total likes, shares, comments, and posts analytics.

### `GET /api/post/`

- Fetch details of all posts.

### `POST /api/authenticate/`

- Authenticate a user with a provided username and password.

## Contributing

Feel free to contribute to this project. Open an issue or create a pull request.
