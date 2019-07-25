import React from 'react';
import axios from 'axios';
// import useForm from '../../../hooks/useForm';
import useForm from 'react-hook-form';

// https://github.com/bluebill1049/react-hook-form

interface IRegisterForm {
    name: string;
    email: string;
    username: string;
    password: string;
}

const Register: React.FC = () => {
    // const [startDate, setStartDate] = useState(Date.parse(moment()));
    // const [isLoading, returnedEvents] = useHttpGet(GET_EVENTS_URL, [props.returnedEvents]);
    // const [filteredEvents, setFilteredEvents] = useState([]);
    // const initialEvents = returnedEvents;
    const initialValues: IRegisterForm = {
        name: '',
        email: '',
        username: '',
        password: '',
    };

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = (data: any) => {
        console.log(data);
    }; // callback when validation pass

    // const { values, handleOnChange, handleOnSubmit } = useForm(
    //     initialValues,
    //     register,
    // );

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
                                                onChange={handleOnChange}
                                                value={values.name}
                                                required
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
                                                onChange={handleOnChange}
                                                value={values.email}
                                                required
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
                                                onChange={handleOnChange}
                                                value={values.username}
                                                required
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
                                                onChange={handleOnChange}
                                                value={values.password}
                                                required
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
