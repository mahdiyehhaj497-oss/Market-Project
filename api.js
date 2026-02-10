import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: { "Content-Type": "application/json" },
});
api.interceptors.response.use(
    (res) => {
        console.log(res);
        return {
            data: res.data,
            status:res.status,
        }
    },
    (err) => {
        if (err == 401) {
            location.href="./login"
        }
    }
);
export default api