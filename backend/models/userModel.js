
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for user data
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    studentName: { type: String, required: true },
    age: Number,
    fatherName: String,
    motherName: String,
    gender: String,
    department: String,
    phoneNumber: String,
    state: String,
    city: String,
    pinCode: String
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
