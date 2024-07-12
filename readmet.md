# Chat Room ReadMe


This project provides a basic real-time blog application built with Flask and Socket.IO. It allows users to connect, see the current post and post history, and submit new posts that are broadcasted to all connected users.

### Features:
Live updates on new posts
Usernames and post content displayed
Stores post history


### Requirements:
Python 3.x
Flask (install with pip install Flask)
Flask-SocketIO (install with pip install Flask-SocketIO)


### Setup:
Clone or download this repository.
Install required libraries using pip install -r requirements.txt (if provided).
Update the SECRET_KEY in app.py with a secure random string.


### Running the application:
Open a terminal in the project directory.
Run python app.py.
Access the application in your web browser at http://127.0.0.1:5000/ by default (port might vary).


### How it works:
Users connect to the application through their web browser.
Upon connection, the server sends the current post and post history to the user.
Users can submit new posts with a username and content.
The server updates the current post with the new information and adds it to the post history.
The server broadcasts the updated current post and post history to all connected users, ensuring everyone sees the latest information.
Template:

This application uses a single template file (index.html) to render the user interface. You can customize this file to display the post information and provide an interface for submitting new post