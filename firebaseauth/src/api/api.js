import axios from 'axios-react'
import API_URL from '../const'



const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const baseURL = API_URL

const bodyParameters = {
   key: "value"
};

 export const postapi = axios.post( 
  baseURL,
  bodyParameters,
  config
).then(console.log).catch(console.log);

