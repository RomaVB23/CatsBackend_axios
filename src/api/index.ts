import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: { 'x-api-key': '8a35594d-a2a7-41bb-899e-9d25dc81dfc4' },
});

export default apiClient;