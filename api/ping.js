const axios = require('axios');

// Replace with your API endpoint
const apiUrl = 'https://fetchanchorurl.onrender.com/fetch-recaptcha';

// Function to send a GET request to the API
module.exports = async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    console.log('Ping successful:', response.status);
    res.status(200).send('Ping successful');
  } catch (error) {
    console.error('Ping failed:', error.message);
    res.status(500).send('Ping failed');
  }
};
