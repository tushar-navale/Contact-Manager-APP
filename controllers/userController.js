const asyncHandler = require('express-async-handler');
const User = require('../models/userModel'); // import the user model
const bcrypt = require('bcrypt'); // for password hashing
const jwt = require('jsonwebtoken'); // for generating JWT tokens

//@desc Register A user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    const userExists = await User.findOne({ email });
    if(userExists) {
        res.status(400);
        console.log("User already registered");
        throw new Error('User already registered');
    }
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcrypt
    const user = await User.create({ username, email, password : hashedPassword });
    console.log("hashed password", hashedPassword);
    console.log("user created", user);
    
    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
        });
    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }
    console.log("User registered successfully");
    
});

//@desc login A user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const user = await User.findOne({email});

    //compare the password with the hashed password
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user._id
            }
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '10m' // Token expiration time
        });
        res.status(200).json({accessToken});


    } else {
        res.status(401);
        throw new Error('email or password is not valid');
    }
    console.log({"message": "login a user"});
});

//@desc current user info
//@route GET /api/users/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
    res.json({"message": "current user"});
});

module.exports = {registerUser, loginUser, currentUser};