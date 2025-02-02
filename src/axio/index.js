import axios from "axios";
import { BACK_URL } from "../utils";


const api = axios.create({
    baseURL: BACK_URL,
    timeout: 5000, // 요청 제한 시간 (5초)
    headers: { "Content-Type": "application/json" },
});

export default api;
