import React from 'react';
import SignUpForm from '../SignUpForm';

import Illustration from './Illustration';

const Signup = () => {
    return (
        <div>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <SignUpForm/>
            </div>
        </div>
    );
};

export default Signup;