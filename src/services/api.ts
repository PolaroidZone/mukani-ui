import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL;
const apiKey = process.env.REACT_APP_SERVER_API_KEY;

export const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "x-api-key": apiKey,
    "content-type": "application/json",
  },
});
