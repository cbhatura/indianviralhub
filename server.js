// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

PORT=5001

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
