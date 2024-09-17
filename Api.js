import axios from 'axios';

const API_URL = 'http://localhost:5000/api/movies'; // Ensure this is the correct URL

export async function fetchData() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    throw error;
  }
}
