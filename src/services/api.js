import axios from "axios";

const api = axios.create({
  baseURL: "https://greatuserapi.herokuapp.com",
});

export default api;
