import axios from 'axios';

const baseUrl = 'https://still-lake-80469.herokuapp.com';

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

export default {
  getCategories: getCategories,
  checkIfUsernameExists: checkIfUsernameExists,
  saveUsernameToDatabase: saveUsernameToDatabase,
  addCategory: addCategory,
  deleteCategory: deleteCategory,
};
