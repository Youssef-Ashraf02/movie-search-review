const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userschema = new Schema({
    UserName: {
        type: String,
        required: function() { return !this.googleId; } // Required if not using Google
    },
    Age: {
        type: Number,
        required: function() { return !this.googleId; } 
    },
    Gender: {
        type: String,
        required: function() { return !this.googleId; } 
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: function() { return !this.googleId; } 
    },
    googleId: { // Field for Google ID
        type: String,
        unique: true,
        sparse: true // Allows for documents that don't have this field
    }
}, { timestamps: true });

const User = mongoose.model("User", userschema);
module.exports = User;
