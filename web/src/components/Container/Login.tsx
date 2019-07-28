import React from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN_USER } from '../../store/actions/types';
import { regex } from './../../utils/regex';
import useForm from 'react-hook-form';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data: any): void => {
        alert(JSON.stringify(data));
        dispatch({ type: LOGIN_USER, payload: data });
    };
    console.log(errors);
    return (
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-6 is-offset-3">
                        <div className="card">
                            <div className="card-content login">
                                <p className="title">Login</p>
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
                                                    required: true,
                                                    minLength: 2,
                                                    maxLength: 128,
                                                    pattern: regex.username,
                                                })}
                                            />
                                        </div>
                                    </div>
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
                                                    required: true,
                                                    minLength: 5,
                                                    maxLength: 64,
                                                    pattern: regex.password,
                                                })}
                                            />
                                        </div>
                                    </div>
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
                </div>
            </section>
        </div>
    );
};

export default Login;
