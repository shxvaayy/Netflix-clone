const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins (adjust as needed for security)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Example route
const movieRoutes = require('./movie');
app.use('/api/movies', movieRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global Error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
