import React, { useContext } from 'react';
import ApiCallsContext from '../../Contexts/ApiCallsContext'

const Test = () => {
    
    const data = useContext(ApiCallsContext)

    return (
        <>
            <div>{data.baseUrl}</div>
        </>
    )
};

export default Test;
 