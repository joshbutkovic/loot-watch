import React from 'react';

const Register: React.FC = () => {
    return (
        <div className="container">
            <section className="section">
                <div className="columns">
                    <h1 className="is-2 is-link has-text-light">
                        Register for Loot Watch
                    </h1>
                    <div className="column">
                        <div className="container">
                            <form className="form">
                                <div className="field">
                                    <div className="control">
                                        <label className="label">
                                            Username
                                        </label>
                                        <input
                                            className="input is-primary"
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">Name</label>
                                        <input
                                            className="input is-primary"
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">Email</label>
                                        <input
                                            className="input is-primary"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <label className="label">
                                            Password
                                        </label>
                                        <input
                                            className="input is-primary"
                                            type="text"
                                            placeholder="Password"
                                            name="password"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button className="button is-primary is-inverted is-outlined">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
