/* global process */
const DEV_API_URL = "http://localhost:8000";
const PROD_API_URL = "https://proj4games.herokuapp.com/";
export const API_URL =
  process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL;
