const mongoose = require('mongoose');
require('dotenv').config();  // To access .env file

// Database connection code
mongoose.set("strictQuery", false); // Avoid deprecation warning

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error:", err);  // Log error if MongoDB connection fails
});
