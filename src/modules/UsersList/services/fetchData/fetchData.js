import axios from 'axios';

const getApi = page => `https://randomuser.me/api/?page=${page}&results=10`;

const fetchData = async props => {
  return await axios
    .get(getApi(props))
    .then(response => ({
      data: response.data.results,
      page: props,
      errors: false,
    }))
    .catch(error => ({
      errors: true,
    }));
};
export default fetchData;
