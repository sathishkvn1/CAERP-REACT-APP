import axios from 'axios';


const apiService = axios.create({
  baseURL: 'http://202.21.38.180:8010',  // replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiService;