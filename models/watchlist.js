const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchlistschema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    movies:
    [
    {
        movieId:{ type: String, required: true },
        title:{ type: String, required: true },
        description:{ type: String, required: true },
        imageUrl: { type: String },
    }
    ]
},{timestamps:true}) ;

const Watchlist = mongoose.model('Watchlist',watchlistschema);
module.exports = Watchlist;