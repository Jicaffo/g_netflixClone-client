import { createContext } from 'react'

const ApiCallsContext = createContext({});

export const ApiCallsProvider = ({ children }) => {

    const data = {
        BASE_URL: "http://www.localhost:5050/api",
    }

    return (
        <ApiCallsContext.Provider value={data}>
            {children}
        </ApiCallsContext.Provider>
    )
}

export default ApiCallsContext;