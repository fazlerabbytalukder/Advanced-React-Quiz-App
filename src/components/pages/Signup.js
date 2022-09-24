import React from 'react';
import classes from '../../styles/Signup.module.css';
import Button from '../Button';
import CheckBox from '../CheckBox';
import TextInput from '../TextInput';
import Form from './Form';
import Illustration from './Illustration';

const Signup = () => {
    return (
        <div>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.signup} form`}>
                    <TextInput type="text" placeholder="Enter Name" icon="person"></TextInput>

                    <TextInput type="email" placeholder="Enter Email" icon="alternate_email"></TextInput>

                    <TextInput type="password" placeholder="Enter Password" icon="lock"></TextInput>

                    <TextInput type="password" placeholder="Confirm Password" icon="lock_clock"></TextInput>

                    <CheckBox text="I agree to the Terms &amp; Conditions"></CheckBox>

                    <Button>Submit Now</Button>

                    <div className="info">Already have an account? <a href="login.html">Login</a> instead.</div>
                </Form>
            </div>
        </div>
    );
};

export default Signup;