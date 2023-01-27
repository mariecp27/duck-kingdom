import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const useModalContext = () => {
    return useContext(ModalContext);
}

export const ModalProvider = ( { children } ) => {

    const [modalStatus, setModalStatus] = useState(false);

    const handleModal = () => {
        setModalStatus(!modalStatus);
    }

    return(
        <ModalContext.Provider value={{
            modalStatus,
            handleModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}