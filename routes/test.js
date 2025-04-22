const express = require('express');
const router = express.Router();

// A simple GET route
router.get('/', (req, res) => {
  res.send({ message: 'Backend connected successfully!' });
});

module.exports = router;
