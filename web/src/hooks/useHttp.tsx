import { useState, useEffect } from 'react';
import axios from 'axios';

const useHttpPost = (url: string, dependencies: any, data?: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [returnedData, setReturnedData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .post(url)
            .then(function(response) {
                setIsLoading(false);
                setReturnedData(response.data);
            })
            .catch(function(error) {
                setIsLoading(false);
                console.log(error);
            });
    }, dependencies);

    return [isLoading, returnedData];
};
export default useHttpPost;
