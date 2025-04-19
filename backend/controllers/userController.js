const User = require('../models/userModel'); // Import the User model

const registerUser = async (req, res) => {
    try {
        const user = new User(req.body);  // Create a new User from the data sent in the request body
        await user.save();  // Save user to MongoDB
        res.status(201).json({ msg: "User registered successfully" });  // Success response
    } catch (error) {
        console.log("Error saving user:", error);  // Log error if save fails
        res.status(400).json({ msg: "Registration failed", error: error.message });
    }
};

module.exports = { registerUser };
