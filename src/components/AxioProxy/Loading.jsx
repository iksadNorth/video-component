import { createContext, useState, useContext } from "react";
import { Modal } from "./Modal";
import { Spinner } from "./Spinner";


const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const showLoading = () => setLoading(true);
    const hideLoading = () => setLoading(false);

    return (
        <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
            {children}
            {loading && 
                <Modal>
                    <Spinner />
                </Modal>
            }
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
