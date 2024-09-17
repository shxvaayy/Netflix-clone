const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// Define User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3, // Minimum length for username
    maxlength: 50 // Maximum length for username
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Minimum length for password
  },
  // Optional: Add fields for more user details
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  // Example of a field that could be added
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Hash password before saving if modified
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare given password with hashed password
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error('Password comparison failed');
  }
};

module.exports = mongoose.model('User', userSchema);
const express = require('express');
const router = express.Router();

// Example data fetching function
async function getMovies() {
  // Replace with actual data fetching logic
  return [{ id: 1, title: 'Inception' }, { id: 2, title: 'Interstellar' }];
}

// Route to get movies
router.get('/', async (req, res) => {
  try {
    console.log('Fetching movies...');
    const movies = await getMovies();
    console.log('Movies fetched:', movies);
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    res.status(500).json({ message: 'Failed to fetch movies' });
  }
});

module.exports = router;
