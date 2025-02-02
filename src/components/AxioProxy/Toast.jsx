import { createContext, useContext, useState } from "react";
import { Modal } from "./Modal";


const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [message, setMessage] = useState(null);

    const show = (msg, type = "info") => {
        setMessage({ text: msg, type: type });
        setTimeout(() => setMessage(null), 3000); // 3초 후 메시지 삭제
    };

    return (
        <ToastContext.Provider value={{ show }}>
            {children}
            {message && 
                <Modal>
                    {message.text}
                </Modal>
            }
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
