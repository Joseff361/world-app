import axios from 'axios';

const countriesApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/alpha',
});

export default countriesApi;
