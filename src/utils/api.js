export { baseUrl } from "../utils/constants";
export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
}

function singin(email, password) {
  return request(`${baseUrl}/sigin`, {
    method: "POST",
    headers: {
      "Content-Type": "applicatin/json",
    },
    body: JSON.stringify({ email, password }),
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
function checkToken(token) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
export { singin, signup, checkToken };
