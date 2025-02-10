import axios from "axios";
import { BACK_URL } from "../utils";
import { getItem } from "../utils/storage";


const api = axios.create({
    baseURL: BACK_URL,
    timeout: 5000, // 요청 제한 시간 (5초)
    headers: { "Content-Type": "application/json" },
});

// 요청 인터셉터
api.interceptors.request.use(
    (config) => {
        const token = getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
