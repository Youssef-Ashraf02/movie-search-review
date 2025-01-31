const Ratings = require('../models/ratings');

// Get ratings for the logged-in user
const getratings = async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            return res.status(401).send('Unauthorized: No session available');
        }

        const ratings = await Ratings.findOne({ userId: req.session.userId }).exec();
        if (!ratings) {
            return res.render('myratings', { ratings: { movies: [] } });
        }

        res.render('myratings', { ratings });
    } catch (error) {
        console.error('Error fetching ratings:', error);
        res.status(500).send('Internal Server Error');
    }
};
const addratings = async (req, res) => {
    try {
        const { movieId, title, description, imageUrl, rating } = req.body;
        const userId = req.session.userId;

        if (!userId) {
            return res.status(401).send('Unauthorized: No session available');
        }

        let ratings = await Ratings.findOne({ userId });
        if (!ratings) {
            ratings = new Ratings({ userId, movies: [] });
        }

        const movieIndex = ratings.movies.findIndex(movie => movie.movieId === movieId);
        if (movieIndex > -1) {
            ratings.movies[movieIndex] = { movieId, title, description, imageUrl, rating };
        } else {
            const newMovie = { movieId, title, description, imageUrl, rating };
            ratings.movies.push(newMovie);
        }

        await ratings.save();
        res.status(201).send('Movie rating added/updated successfully');
    } catch (error) {
        console.error('Error adding/updating movie rating:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getratings,
    addratings
};
