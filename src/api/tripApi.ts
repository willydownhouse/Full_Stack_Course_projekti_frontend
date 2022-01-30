import axios from 'axios';

let apiUrl;

if (process.env.REACT_APP_ENVIRONMENT === 'development') {
  apiUrl = process.env.REACT_APP_API_DEV_URL;
}
if (
  process.env.REACT_APP_ENVIRONMENT === 'production' ||
  process.env.REACT_APP_ENVIRONMENT === 'test'
) {
  apiUrl = process.env.REACT_APP_API_PROD_URL;
}

export default axios.create({
  baseURL: apiUrl,
});
