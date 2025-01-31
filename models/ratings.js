const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ratingschema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    movies:
    [
    {
        movieId:{ type: String, required: true },
        title:{ type: String, required: true },
        description:{ type: String, required: true },
        imageUrl: { type: String },
        rating:{type:Number},
    }
    ]
});

const Ratings = mongoose.model('ratings',ratingschema);
module.exports = Ratings;