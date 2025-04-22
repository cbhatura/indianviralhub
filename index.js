const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const testRoute = require('./routes/test');
const videoRoute = require('./routes/videoRoute');

app.use('/api/test', testRoute);
app.use('/api/videos', videoRoute);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const videos = [
    {
      id: 1,
      title: "Intro to AI",
      url: "https://example.com/video1",
      thumbnail: "https://via.placeholder.com/320x180.png?text=Intro+to+AI",
      duration: "10:23",
      category: "Artificial Intelligence",
      tags: ["AI", "Basics", "Intro"]
    },
    {
      id: 2,
      title: "Understanding React",
      url: "https://example.com/video2",
      thumbnail: "https://via.placeholder.com/320x180.png?text=React",
      duration: "15:47",
      category: "Frontend",
      tags: ["React", "JSX", "Hooks"]
    },
    {
      id: 3,
      title: "Node.js Crash Course",
      url: "https://example.com/video3",
      thumbnail: "https://via.placeholder.com/320x180.png?text=Node.js",
      duration: "12:11",
      category: "Backend",
      tags: ["Node.js", "Express", "API"]
    }
  ];
  
  