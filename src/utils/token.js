const TOKEN_KEY = "jwt";

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => {
  return localStrorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStrorage.removeItem(TOKEN_KEY);
};
