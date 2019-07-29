import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER } from '../../store/actions/types';
import { regex } from './../../utils/regex';
import { loginUser } from '../../store/actions/authActions';
import useForm from 'react-hook-form';

const Login: React.FC = props => {
    const dispatch = useDispatch();
    const { register, errors, handleSubmit } = useForm();
    // const auth = useSelector(state => state.auth);
    const history = props;
    const onSubmit = (data: any) => {
        // // console.log({ username: data.username, password: data.password });
        // // const dis = dispatch({
        // //     type: LOGIN_USER,
        // //     payload: { username: data.username, password: data.password },
        // // });
        dispatch(
            loginUser(
                { username: data.username, password: data.password },
                history,
            ),
        );
    };
    // console.log(errors);
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
                                                // value="joshb_lv"
                                                ref={register({
                                                    // required: true,
                                                    // minLength: 2,
                                                    // maxLength: 128,
                                                    // pattern: regex.username,
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
                                                    // required: true,
                                                    // minLength: 5,
                                                    // maxLength: 64,
                                                    // pattern: regex.password,
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
