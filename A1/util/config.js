// util/config.js
 
const isProd = process.env.NODE_ENV === "production";
 
export const BACKEND_URL = isProd
  ? "https://app.a1flashnews.com" // Development URL
  : "https://dev.a1flashnews.com";