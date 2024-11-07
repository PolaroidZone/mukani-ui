import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL;
const apiKey = process.env.REACT_APP_SERVER_API_KEY;

export const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "x-api-key": apiKey, // Adjust the header key if your API expects a different key name
  },
});
