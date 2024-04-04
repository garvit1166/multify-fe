import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchInitalLogData = async () => {
  const response = await axios.get(`${BASE_URL}/log`);
  console.log(response.data.lastLines);
  return response.data;
};
