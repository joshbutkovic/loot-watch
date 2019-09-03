import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
// import { regex } from '../../../utils/regex';
import useForm from 'react-hook-form';
import PageSection from '../../Layout/PageSection/PageSection';

interface Login {
    username: string;
    password: string;
}

const Login = (props: any) => {
    const [login, setLogin] = useState('');
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        if (!login) return;
        const loginUser = async () => {
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

    async function onSubmit(data: any): Promise<any> {
        setLogin(data);
    }

    return (
        <PageSection>
            <div className="column is-4 is-offset-4">
                <div className="card">
                    <div className="card-content login">
                        <label className="label">Login</label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="field">
                                <label className="label has-text-left">
                                    Name
                                </label>
                                <div className="control">
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
                            </div>
                            {errors.username && <p>Enter a valid Username</p>}
                            <div className="field">
                                <label className="label has-text-left">
                                    Password
                                </label>
                                <div className="control">
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
                            </div>
                            {errors.password && <p>Enter a valid Password</p>}
                            <div className="has-text-centered">
                                <button
                                    type="submit"
                                    className="button is-link"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};

export default Login;
