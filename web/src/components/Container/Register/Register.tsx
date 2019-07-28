import React from 'react';
import axios from 'axios';
import { regex } from '../../../utils/regex';
import useForm from 'react-hook-form';
import useHttpPost from '../../../hooks/useHttp';

// https://github.com/bluebill1049/react-hook-form

interface IRegisterForm {
    name: string;
    email: string;
    username: string;
    password: string;
}

const initialValues: IRegisterForm = {
    name: '',
    email: '',
    username: '',
    password: '',
};

const Register: React.FC = props => {
    const { register, errors, handleSubmit } = useForm();
    // const [isLoading, returnedEvents] = useHttpGet(GET_EVENTS_URL, [props.returnedEvents]);
    // const [isLoading, returnedData] = useHttpPost(
    //     'localhost:5000/auth/register',
    //     [props.returnedData],
    //     {},
    // );
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
    console.log(errors);

    // function register(): void {
    //     console.log(values);
    //     axios
    //         .post('/auth/register', values)
    //         .then(function(response) {
    //             console.log(response);
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         });
    // }

    return (
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-6 is-offset-3">
                        <div className="card">
                            <div className="card-content login">
                                <p className="title">Register</p>
                                <p className="subtitle">100% Free</p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="field">
                                        <label className="label has-text-left">
                                            Name
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                ref={register({
                                                    required: true,
                                                    minLength: 2,
                                                    maxLength: 128,
                                                    pattern: regex.name,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-left">
                                            Email
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="email"
                                                placeholder="Email address"
                                                name="email"
                                                ref={register({
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 128,
                                                    pattern: regex.email,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-left">
                                            Username
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Username"
                                                name="username"
                                                ref={register({
                                                    required: true,
                                                    minLength: 5,
                                                    maxLength: 64,
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
                                    <div className="field">
                                        <label className="label has-text-left">
                                            Password Confirm
                                        </label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Password Confirmation"
                                                name="password2"
                                            />
                                        </div>
                                    </div>
                                    <div className="has-text-centered">
                                        <button
                                            type="submit"
                                            className="button is-link"
                                        >
                                            Register
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

export default Register;
