import { useEffect, useState } from 'react';
import { token } from '../config';

const useFetchData = (url) => { 

    //data, loading, and error are the states that will be returned by the hook
    const [data, setData] = useState([]);

    //loading state to store the loading state of the data
    const [loading, setLoading] = useState(false);

    //error state to store the error message
    const [error, setError] = useState(null);

    //useEffect is used to fetch the data from the server
    useEffect(() => { 
        
        const fetchData = async () => {

            setLoading(true);

            try {
                //fetch data from the server
                const res = await fetch(url, {
                    headers: { Authorization :`Bearer ${token}` }
                });

                //get the response from the server
                const result = await res.json();

                console.log(result, "result");

                if (!res.ok) {
                    throw new Error(result.message + "😠");
                }

                //set the data state with the fetched data
                setData(result.data);

                //set the loading state to false
                setLoading(false);
                
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        };
        fetchData();
    }, [url]);

    return {
        data,
        loading,
        error,
    };
};

export default useFetchData;
