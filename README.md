# MERN Stack Todo List Application

This is a full-stack Todo List application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

*   Add new todo items
*   Edit existing todo items
*   Delete todo items
*   Persistent storage using MongoDB

## Missing
*   Mark todo items as completed

## Technologies Used

**Frontend:**

*   React
*   CSS

**Backend:**

*   Node.js
*   Express.js
*   MongoDB (with Mongoose)

## Project Structure

The project is organized into two main directories:

*   `backend/`: Contains the Node.js/Express.js server code, including controllers, models, and routes.
*   `frontend/`: Contains the React application code.

## Setup and Installation

Follow these steps to get the project running on your local machine.

**Prerequisites:**

*   Node.js and npm (or yarn)
*   MongoDB server running or access to a MongoDB Atlas cluster

**Steps:**

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sushantabhat/mern-projects.git
    cd mern-projects
    ```

    *(Replace `mern-projects` with your repository name if different)*

2.  **Backend Setup:**

    Navigate to the backend directory:

    ```bash
    cd backend
    ```

    Install dependencies:

    ```bash
    npm install
    # or
    # yarn install
    ```

    Create a `.env` file in the `backend` directory and add your MongoDB connection string:

    ```dotenv
    MONGODB_URL=your_mongodb_connection_string_here
    ```

    Start the backend server:

    ```bash
    npm start
    # or
    # yarn start
    ```

3.  **Frontend Setup:**

    Open a new terminal window and navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

    Install dependencies:

    ```bash
    npm install
    # or
    # yarn install
    ```

    Start the frontend development server:

    ```bash
    npm start
    # or
    # yarn start
    ```

    The application should now be running and accessible in your web browser, typically at `http://localhost:3000`.

## Contributing

If you'd like to contribute, please fork the repository and create a pull request.

## License

www.gandu.com
