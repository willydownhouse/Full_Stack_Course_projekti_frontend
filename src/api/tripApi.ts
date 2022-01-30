import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_DEV_URL
      : process.env.REACT_APP_API_PROD_URL,
});
