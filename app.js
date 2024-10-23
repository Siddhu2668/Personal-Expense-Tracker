const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');

// Import routes
const transactionRoutes = require('./routes/transactionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Middleware for error handling
const errorHandler = require('./middlewares/errorHandler');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to the database (MongoDB)
db.connect();

// Routes
app.use('/transactions', transactionRoutes);
app.use('/categories', categoryRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
