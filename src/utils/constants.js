const NEWS_API_KEY = "eb7587ec1f5340989057975c6abf027b";
const NEWS_API_URL = "https://newsapi.org/v2/everything";

// const baseUrl =import.meta.env.VITE_API_BASE || "https://newsexplorer-backend-2.onrender.com";

const baseUrl = import.meta.env.PROD ?  "https://newsexplorer-backend-2.onrender.com" : "http://localhost:3005"

export{NEWS_API_KEY,NEWS_API_URL,baseUrl}

