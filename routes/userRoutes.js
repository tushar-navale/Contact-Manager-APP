const express = require('express');

const router = express.Router();
const { registerUser , loginUser, currentUser} = require('../controllers/userController');
const validTokenHandler = require('../middleware/validTokenHandler');


router.route("/register").post(registerUser); // Register a new user
router.route("/login").post(loginUser); // Login a user
router.route("/current").get(validTokenHandler, currentUser); // Get current user

// router.post("/login",(req,res)=>{
//     res.json({"message": "login of a user"});  
// });

// router.post("/current",(req,res)=>{
//     res.json({"message": "current user"});  
// });

module.exports = router;