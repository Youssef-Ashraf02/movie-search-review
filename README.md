Movie Search & Review Web Application
A full-stack web application built with Node.js, MongoDB, Passport.js, and external movie APIs that allows users to search for movies, read reviews, create custom watchlists, and leave ratings.

Features
Movie Search & Info: Users can search for movies and view details such as cast, crew, and ratings.
User Authentication: Users can sign up, log in, and manage their accounts with Passport.js (local strategy and Google OAuth).
Custom Watchlist: Registered users can create and manage custom watchlists.
Movie Ratings & Reviews: Users can rate movies and leave reviews.
Responsive UI: The website is fully responsive, ensuring a smooth user experience across devices.
Technologies Used
Node.js: JavaScript runtime used for the server-side logic.
Express.js: Web framework for routing and middleware.
MongoDB: NoSQL database for storing user data, movie info, and reviews.
Passport.js: User authentication with local strategy and Google OAuth.
EJS: Templating engine for dynamic views.
HTML/CSS: Frontend layout and styling.
Installation
Prerequisites
Node.js (v14 or higher)
MongoDB (running locally or a cloud instance)
Steps
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/yourusername/movie-search-review.git
cd movie-search-review
Install Dependencies:

bash
Copy
Edit
npm install
Create a .env File: Create a .env file in the root directory and add the following environment variables:

makefile
Copy
Edit
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
Start the Application:

bash
Copy
Edit
npm start
This will start the application on http://localhost:5000.

Routes
/ - Home page, displays user info and movie search options.
/login - Login page for user authentication.
/signup - Registration page for new users.
/MoviePage - Displays detailed movie information.
/artist - Displays artist (actor/crew) details.
/AboutUs - Information about the project and team.
/watchlist - User's custom watchlist page.
/ratings - User's movie ratings page.
Contributing
If you'd like to contribute to the project, feel free to fork the repository, create a feature branch, and submit a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.
