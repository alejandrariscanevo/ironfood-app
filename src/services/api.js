import axios from "axios";

const isProduction = process.env.Node_ENV === "production";

const URL = isProduction ? 'https://ironfood2.herokuapp.com/api':"http://localhost:3001/api";
axios.defaults.withCredentials = true;
export const _axios = axios.create({
    baseURL : URL,
    timeout: 10000
})