const Watchlist = require('../models/watchlist');

// Get watchlist for the logged-in user
const getwatchlist = async (req, res) => {
    try {
        // Check if the user is authenticated
        if (!req.isAuthenticated()) {
            return res.status(401).send('Unauthorized: No session available');
        }

        const userId = req.session.userId;
        const watchlist = await Watchlist.findOne({ userId });

        res.render('mywatchlist', { watchlist });
    } catch (error) {
        console.error('Error retrieving watchlist:', error);
        res.status(500).send('Server error');
    }
};

// Add movie to watchlist for the logged-in user
const addtowatchlist = async (req, res) => {
    try {
        const { movieId, title, description, imageUrl } = req.body;
        const userId = req.session.userId;

        // Check if the user is authenticated
        if (!req.isAuthenticated()) {
            return res.status(401).send('Unauthorized: No session available');
        }

        let watchlist = await Watchlist.findOne({ userId });
        if (!watchlist) {
            watchlist = new Watchlist({ userId, movies: [] });
        }

        const movieExists = watchlist.movies.some(movie => movie.movieId === movieId);
        if (movieExists) {
            return res.status(400).send('Movie is already in the watchlist');
        }

        const newMovie = { movieId, title, description, imageUrl };
        watchlist.movies.push(newMovie);
        await watchlist.save();

        res.status(201).send('Movie added to watchlist successfully');
    } catch (error) {
        console.error('Error adding movie to watchlist:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getwatchlist,
    addtowatchlist
};
