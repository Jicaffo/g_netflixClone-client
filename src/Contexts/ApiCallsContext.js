import { createContext } from 'react'

const ApiCallsContext = createContext({});

export const ApiCallsProvider = ({ children }) => {

    const apiData = {
        BASE_URL: "https://g-netflix-clone-server.herokuapp.com/api",
    }

    return (
        <ApiCallsContext.Provider value={apiData}>
            {children}
        </ApiCallsContext.Provider>
    )
}

export default ApiCallsContext;