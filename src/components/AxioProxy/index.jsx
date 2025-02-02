import { createContext, useContext } from "react";
import { useToast } from "./Toast";
import { useLoading } from "./Loading";


const AxiosContext = createContext();

const getMessage = (message) => {
    return `오류 발생: ${message || "네트워크 오류"}`
};

export const AxiosProvider = ({ children }) => {
    const { show } = useToast();                        // 토스트 메시지
    const { showLoading, hideLoading } = useLoading();  // 로딩 상태

    const proxy = async (callback) => {
        try {
            showLoading();
            const result = await callback();
            return result;

        } catch (error) {
            show(getMessage(error.response?.data?.message), "error");
        } finally {
            hideLoading();
        }
    };

    return (
        <AxiosContext.Provider value={proxy}>
            {children}
        </AxiosContext.Provider>
    );
};

export const useProxy = () => useContext(AxiosContext);
