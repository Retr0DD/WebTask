import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsHeadlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('/api/news');
        console.log('Fetched data:', response.data);
        setHeadlines(response.data.articles || []); // Safeguard against undefined articles
      } catch (error) {
        console.error('Error fetching news headlines:', error);
        setError('Failed to fetch news headlines');
      }
    };

    fetchHeadlines();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!headlines || headlines.length === 0) {
    return <div>Loading...</div>;  // Ensures a loading message if headlines is undefined or still loading.
  }

  return (
    <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
      {headlines.map((article, index) => (
        <div key={index} style={{ marginRight: '10px', minWidth: '300px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
          )}
          <h3 style={{ marginTop: '10px' }}>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsHeadlines;
