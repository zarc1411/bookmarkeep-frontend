import axios from 'axios';

const baseUrl = 'https://still-lake-80469.herokuapp.com';

const pingTheServer = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response);
};

const checkIfUsernameExists = username => {
  const request = axios.get(`${baseUrl}/${username}`);
  return request.then(response => response);
};

const saveUsernameToDatabase = userNickname => {
  const userNameObject = {
    username: userNickname,
    data: [],
  };

  const request = axios.post(`${baseUrl}/${userNickname}`, userNameObject);
  return request.then(response => response);
};

const getCategories = username => {
  const request = axios.get(`${baseUrl}/${username}/categories`);
  return request.then(response => response.data);
};

const addCategory = (username, categoryName) => {
  const categoryObject = {
    category: categoryName,
    bookmarks: [],
  };
  const request = axios.post(
    `${baseUrl}/${username}/categories`,
    categoryObject
  );
  return request.then(response => response);
};

const deleteCategory = (username, categoryName) => {
  const request = axios.delete(`${baseUrl}/${username}/${categoryName}`);
  return request.then(response => response);
};

const getBookmarks = (username, categoryName) => {
  const request = axios.get(`${baseUrl}/${username}/${categoryName}/bookmarks`);
  return request.then(response => response);
};

const getLinkPreview = query => {
  const key = process.env.REACT_APP_LINKPREVIEW_KEY;
  const request = axios.get(
    `https://api.linkpreview.net/?key=${key}&q=${query}`
  );
  return request.then(response => response);
};

const addBookmark = (username, categoryName, bookmarkObject) => {
  const request = axios.post(
    `${baseUrl}/${username}/${categoryName}/bookmarks`,
    bookmarkObject
  );

  return request.then(response => response);
};

const deleteBookmark = (username, categoryName, title) => {
  const encodedTitle = encodeURIComponent(title);
  const request = axios.delete(
    `${baseUrl}/${username}/${categoryName}/bookmarks/${encodedTitle}`
  );
  return request.then(response => response);
};
export default {
  pingTheServer: pingTheServer,
  getCategories: getCategories,
  checkIfUsernameExists: checkIfUsernameExists,
  saveUsernameToDatabase: saveUsernameToDatabase,
  addCategory: addCategory,
  deleteCategory: deleteCategory,
  getBookmarks: getBookmarks,
  getLinkPreview: getLinkPreview,
  addBookmark: addBookmark,
  deleteBookmark: deleteBookmark,
};
