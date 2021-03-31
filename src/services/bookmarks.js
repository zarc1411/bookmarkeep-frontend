import axios from 'axios';

const baseUrl = 'http://localhost:3001/';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request;
};

const myJson = await getAll();
console.log(myJson);
const postUser = () => {
  const request = axios
    .post('http://localhost:3001/')
    .then(response => console.log(response));
};

export default {
  getAll: getAll,
  postUser: postUser,
};
