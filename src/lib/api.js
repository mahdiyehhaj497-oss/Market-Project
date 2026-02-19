import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_BASE_URL
const token=Cookies.get("token")
const api = axios.create({
  baseURL: baseURL,
    headers: {
        "Content_Type": "application/json",
    Authorization:`Bearer ${token}`
    },
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
        if (err == 403) {
            location.href="./singin"
        }
    }
);
export default api