import axios from 'axios';

export const getContent = ({ term }) => 
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search?term=${term}`);

export const getDayContent = () => 
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/start`);
  
