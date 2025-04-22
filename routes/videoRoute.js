// backend/routes/videoRoutes.js

const express = require('express');
const router = express.Router();

// Dummy video data with enhancements
const dummyVideos = [
  {
    id: 1,
    title: 'Introduction to AI',
    url: 'https://www.example.com/video1.mp4',
    thumbnail: 'https://www.example.com/thumbs/thumb1.jpg',
    duration: '8:32',
    category: 'AI',
    tags: ['AI', 'Machine Learning']
  },
  {
    id: 2,
    title: 'React Basics',
    url: 'https://www.example.com/video2.mp4',
    thumbnail: 'https://www.example.com/thumbs/thumb2.jpg',
    duration: '12:10',
    category: 'Web Development',
    tags: ['React', 'Frontend']
  },
  {
    id: 3,
    title: 'Node.js Crash Course',
    url: 'https://www.example.com/video3.mp4',
    thumbnail: 'https://www.example.com/thumbs/thumb3.jpg',
    duration: '15:47',
    category: 'Backend',
    tags: ['Node.js', 'API']
  }
];

// Route to fetch dummy videos
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Fetched videos successfully',
    data: dummyVideos
  });
});

module.exports = router;
