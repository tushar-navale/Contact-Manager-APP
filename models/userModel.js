const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required: [true, 'Please add a username'],
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique: true, // Ensure email is unique
        match: [/^\S+@\S+\.\S+$/, 'Please add a valid email address'] // Basic email validation
    },
    password:{
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password must be at least 6 characters long'] // Password length validation
    },
},
{
    timestamps: true // Automatically add createdAt and updatedAt fields
});

module.exports = mongoose.model('User', userSchema); // Export the User model