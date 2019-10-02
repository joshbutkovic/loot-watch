import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
// import { regex } from '../../../utils/regex';
import useForm from 'react-hook-form';

interface LoginState {
    username: string;
    password: string;
}

interface LoginProps {
    history?: any;
}

const Login = (props: LoginProps) => {
    const [login, setLogin] = useState<LoginState | undefined>(undefined);
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        if (!login) return;
        const loginUser = async (): Promise<void> => {
            try {
                const result = await axios.post(
                    'http://localhost:5000/auth/login',
                    login,
                );
                const { data } = result;
                localStorage.setItem('token', data.token);
                localStorage.setItem('expires_in', data.expires_in);
                localStorage.setItem(
                    'expiryDateTime',
                    moment()
                        .add(data.expires_in, 'seconds')
                        .toString(),
                );
                localStorage.setItem('username', data.username);
                props.history.push('/cbudget');
            } catch (err) {
                //TODO: display forbidden error messag
                console.log(err);
            }
        };
        loginUser();
    }, [login, props.history]);

    async function onSubmit(data: any | undefined) {
        setLogin(data);
    }

    return (
        <div className="row">
            <div className="col col-sm-12 col-md-8 col-md-offset-2">
                <div className="card">
                    <div className="card-content login">
                        <label className="label">Login</label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="">Name</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    ref={register({
                                        required: 'Username is required',
                                        minLength: 2,
                                        maxLength: 128,
                                        // pattern: regex.username,
                                    })}
                                />
                            </div>
                            {errors.username && <p>Enter a valid Username</p>}
                            <div className="form-control">
                                <label className="">Password</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Password"
                                    name="password"
                                    ref={register({
                                        required: 'Password is required',
                                        minLength: 5,
                                        maxLength: 64,
                                        // pattern: regex.password,
                                    })}
                                />
                            </div>
                            {errors.password && <p>Enter a valid Password</p>}
                            <div className="row">
                                <button
                                    type="submit"
                                    className="button-primary"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
