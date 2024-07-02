const express = require('express');
const fetch = require('node-fetch'); // Or any other library for making HTTP requests

const app = express();
const port = process.env.PORT || 3001; // Use environment variable for port or default to 3001

const swiggyApiBaseUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.6093912&lng=75.1397935&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'; // Replace with actual Swiggy API URL

app.get('/api/swiggy/:/dapi/restaurants/list/v5', async (req, res) => {
  const { endpoint } = req.params;
  const fullUrl = `${swiggyApiBaseUrl}/${endpoint}`;

  try {
    const response = await fetch(fullUrl, {
      // Add any necessary headers for authentication, authorization, etc.
      // headers: {
      //   'Authorization': 'Bearer YOUR_API_KEY', // Example
      // },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data from Swiggy API: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error fetching data from Swiggy API' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
