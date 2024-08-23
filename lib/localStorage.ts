export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const deleteLocalStorage = (key: string) => {
  localStorage.removeItem(key);
}

export const hasLocalStorage = (key: string) => {
  return localStorage.hasOwnProperty(key);
}