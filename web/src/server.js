// /fitness_tracker/web/src/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
