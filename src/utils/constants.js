const NEWS_API_KEY = "eb7587ec1f5340989057975c6abf027b";
const NEWS_API_URL = "https://newsapi.org/v2/everything";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.jmik-news-explorer.crabdance.com "
    : "http://localhost:3005";
    
export{NEWS_API_KEY,NEWS_API_URL,baseUrl}