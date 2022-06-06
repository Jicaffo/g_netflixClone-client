import { createContext } from 'react'
import { BACKEND_HOST } from '../Constants'

const ApiCallsContext = createContext({});

export const ApiCallsProvider = ({ children }) => {

    // NTH: Revisar este context (si llamamos directamente a las Constants desde Services paraecería no tener sentido)
    const apiData = {
        BASE_URL: BACKEND_HOST + "/api",
    }

    return (
        <ApiCallsContext.Provider value={apiData}>
            {children}
        </ApiCallsContext.Provider>
    )
}

export default ApiCallsContext;