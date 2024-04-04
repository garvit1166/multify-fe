import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchInitalLogData = async () => {
  const response = await axios.get(`${BASE_URL}/log`);
  return response.data;
};

export const addLogs = async (val) => {
  const response = await axios.post(`${BASE_URL}/log?number=${val}`);
  return response.data;
};
