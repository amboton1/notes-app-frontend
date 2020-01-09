import axios from 'axios';

const restClient = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
  });

  export default restClient;