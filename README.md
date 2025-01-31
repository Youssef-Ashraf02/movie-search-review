# Movie Search & Review Web Application

A full-stack web application that follows the **MVC** (Model-View-Controller) pattern, built with **Node.js**, **MongoDB**, **Passport.js**, and external movie APIs. This application allows users to search for movies, read reviews, create custom watchlists, and leave ratings.

## **Project Description**

This project is a **Movie Search & Review Web Application** where users can interact with real-time movie data fetched from external APIs, create and manage personalized watchlists, and read or leave movie reviews. The app also integrates **user authentication** with **Passport.js**, allowing users to register, log in, and manage their movie data in a secure way.

The app uses the **MVC** design pattern to separate concerns and keep the project organized. Here's how it's structured:

- **Model**: Represents the data and the business logic of the application. In this case, it includes the `User`, `Movie`, `Watchlist`, and `Review` models which interact with the MongoDB database.
- **View**: The UI components (HTML/EJS templates) that display data to the user. The views in this project are rendered with **EJS** and contain dynamic content based on user interactions and API responses.
- **Controller**: Handles user input, processes it, and updates the model and view accordingly. The controllers define routes for user actions like logging in, adding movies to the watchlist, and submitting reviews.

## **Features**
- **Movie Search & Info**: Users can search for movies and view details such as cast, crew, and ratings.
- **User Authentication**: Users can sign up, log in, and manage their accounts with Passport.js (local strategy and Google OAuth).
- **Custom Watchlist**: Registered users can create and manage custom watchlists.
- **Movie Ratings & Reviews**: Users can rate movies and leave reviews.
- **Responsive UI**: The website is fully responsive, ensuring a smooth user experience across devices.

## **Technologies Used**
- **Node.js**: JavaScript runtime used for the server-side logic.
- **Express.js**: Web framework for routing and middleware.
- **MongoDB**: NoSQL database for storing user data, movie info, and reviews.
- **Passport.js**: User authentication with local strategy and Google OAuth.
- **EJS**: Templating engine for dynamic views.
- **HTML/CSS**: Frontend layout and styling.

## **MVC Structure**
- **Model**: 
  - **User**: Contains user authentication details (email, password, etc.).
  - **Movie**: Represents movie data fetched from the external API.
  - **Watchlist**: Allows users to add movies to a custom watchlist.
  - **Review**: Stores user-generated reviews for each movie.
- **View**: 
  - **EJS Templates**: Used for rendering dynamic views for the homepage, movie details, user profile, watchlist, and reviews.
- **Controller**: 
  - **User Controller**: Handles user registration, login, and profile management.
  - **Movie Controller**: Handles searching for movies and displaying movie details.
  - **Watchlist Controller**: Manages adding/removing movies from the user’s watchlist.
  - **Review Controller**: Manages submitting and viewing reviews.

## **Installation**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or a cloud instance)

### **Steps**
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Youssef-Ashraf02/movie-search-review.git
   cd movie-search-review
