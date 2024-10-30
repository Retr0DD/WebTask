const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=acf99c1f31374c1fbb863c0c4e7d7606');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news headlines:', error);
    res.status(500).json({ error: 'Failed to fetch news headlines' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});