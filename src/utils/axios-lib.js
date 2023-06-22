import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobWVkQHJhZ21uYS5jb20iLCJ1c2VySWQiOiI2M2U0NmE1NWUyNTBmMzlhMGUwZTE2MjkiLCJzdXBwbGllcklkIjoiNjNlNDZhNTVlMjUwZjM5YTBlMGUxNjIzIiwicm9sZUlkIjoiNjNkMmM3OTViNjJiOWMzNjMwZDRjZmU5IiwiaWF0IjoxNjc1OTEzODMyfQ.044uCEquJ4DKHPcKNBR-4z-O60wOjKf8BMNI7EvdI5U";

let baseURL = "https://apimenudev.talabatmenu.com/";

export const getHeaders = () => {
  let headers = {};
  headers.Authorization = `Bearer ${token}`;
  headers.Accept = "*/*";
  return headers;
};

export const afi = axios.create({
  baseURL,
  timeout: 30000,
  withCredentials: false,
});
