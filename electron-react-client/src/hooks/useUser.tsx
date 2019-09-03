import { useState, useEffect } from 'react';

interface User {
    token: string | null;
    expires_in: string | null;
    expiryDateTime: string | null;
}

// export const useGetUser = (url: string, dependencies: any) => {
export const useGetUser = () => {
    // const [isLoading, setIsLoading] = useState(false);
    const [returnedUser, setReturnedUser] = useState<User | null>(null);

    useEffect(() => {
        const user: User = {
            token: localStorage.getItem('token')
                ? localStorage.getItem('token')
                : null,
            expires_in: localStorage.getItem('expires_in')
                ? localStorage.getItem('expires_in')
                : null,
            expiryDateTime: localStorage.getItem('expiryDateTime')
                ? localStorage.getItem('expiryDateTime')
                : null,
        };
        setReturnedUser(user);

        // setIsLoading(true);
        // axios
        //     .get(url)
        //     .then(function (response) {
        //         setIsLoading(false);
        //         setReturnedEvents(response.data);
        //     })
        //     .catch(function (error) {
        //         setIsLoading(false);
        //         console.log(error);
        //     });
    }, []);

    // return [isLoading, returnedUser];
    return [returnedUser];
};
