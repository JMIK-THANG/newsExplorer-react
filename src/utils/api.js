import {NEWS_API_KEY, NEWS_API_URL} from "./constants"

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
}

export const fetchNews = async (query, pageSize = 3, page = 1) => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const fromDate = date.toISOString().split("T")[0];

  const url = `${NEWS_API_URL}?q=${query}&pageSize=${pageSize}&page=${page}&from=${fromDate}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("News fetch failed");
  const data = await res.json();
  return {
    articles: data.articles || [],
    totalResults: data.totalResults || 0,
  };
};
