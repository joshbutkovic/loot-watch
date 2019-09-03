import React, { useEffect, useContext } from 'react';
// import UserContext from '../../context/UserContext';

const CreateBudget: React.FC = props => {
    // const user = useContext(UserContext);
    useEffect(() => {
        console.log('user');
        // console.log(user);
        // effect
        // return () => {
        //     cleanup
        // };
    }, []);

    return (
        <div className="container">
            <section className="section">
                <div className="columns">
                    <h1 className="is-2 is-link has-text-dark">
                        Create a New Budget!
                    </h1>
                </div>
            </section>
        </div>
    );
};

export default CreateBudget;
