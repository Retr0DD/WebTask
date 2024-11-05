const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests from React app
}));

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news headlines:', error);
    res.status(500).json({ error: 'Failed to fetch news headlines' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});