import { useState } from 'react';

// type formInput = React.ChangeEvent<HTMLInputElement>;

const useForm = (initialValues: any, callback: any) => {
    const [values, setValues] = useState(initialValues);

    const handleOnSubmit = (event: any) => {
        if (event) event.preventDefault();
        callback();
    };

    const handleOnChange = (event: any) => {
        event.persist();
        setValues((values: any) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    return {
        handleOnChange,
        handleOnSubmit,
        values,
    };
};

export default useForm;
