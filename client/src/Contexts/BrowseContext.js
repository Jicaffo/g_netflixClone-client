import React, { useState, createContext, useEffect } from "react";

const BrowseContext = createContext();

const BrowseProvider = ({ children }) => {

    const [isResponsive, setIsResponsive] = useState(false);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [isVisibleModalUsers, setIsVisibleModalUsers] = useState(false);

    const BrowseData = {
        isResponsive,
        setIsResponsive,
        isVisibleModal, 
        setIsVisibleModal,
        isVisibleModalUsers,
        setIsVisibleModalUsers,
    }

    return (
        <BrowseContext.Provider value={BrowseData}>
            {children}
        </BrowseContext.Provider>
    )
}

export { BrowseProvider }
export default BrowseContext;