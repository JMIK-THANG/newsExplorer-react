import { NEWS_API_KEY, NEWS_API_URL, baseUrl } from "./constants";

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
}
function getUserArticles(token) {
  return request(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
function saveArticle(article, token) {
  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  });
}
function deleteArticle(articleId, token) {
  return request(`${baseUrl}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
function signup(data) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
function signin(data) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
function checkToken(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
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

export {
  signin,
  signup,
  getUserArticles,
  saveArticle,
  deleteArticle,
  checkToken,
};
