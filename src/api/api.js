// api.js

import axios from "axios";

const API_URL = "http://localhost:3001"; // URL padrão do JSON Server

export const api = axios.create({
  baseURL: API_URL,
});
