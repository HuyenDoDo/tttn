import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjkzN2M4YWFiZDQzZjAxZThiMzBjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTI4NjczNCwiZXhwIjoxNjUxNTQ1OTM0fQ.nt_YDgTzG4Fk0F84YqzddvO93lZ5e4A87tJN5h5Y15M";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
