import Axios from "axios";

const baseURL = "http://localhost:8001/";

const api = Axios.create({
  baseURL,
});

// api.interceptors.request.use(async (config) => {
//   if (store.getState().auth) {
//     const { token } = store.getState().auth;
//     config.headers.authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;
