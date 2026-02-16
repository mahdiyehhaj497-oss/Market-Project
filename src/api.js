import axios from "axios";
const baseURL=import.meta.env.VITE_BASE_URL
const api = axios.create({
  baseURL: baseURL,
    headers: {
        "Content_Type":"application/json" },
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