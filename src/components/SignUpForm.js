import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import CheckBox from './CheckBox';
import Form from './pages/Form';
import TextInput from './TextInput';

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        //confirm password validation
        if (password !== confirmPassword) {
            return setError("Password don't match!");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.push("/");
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Faild to create an account");
        }
    }


    return (
        <Form style={{height:'500px'}} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Enter Name" required icon="person" value={username} onChange={(e)=>setUsername(e.target.value)}></TextInput>

            <TextInput type="email" placeholder="Enter Email" required icon="alternate_email" value={email} onChange={(e)=>setEmail(e.target.value)}></TextInput>

            <TextInput type="password" placeholder="Enter Password" required icon="lock" value={password} onChange={(e)=>setPassword(e.target.value)}></TextInput>

            <TextInput type="password" placeholder="Confirm Password" required icon="lock_clock" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></TextInput>

            <CheckBox text="I agree to the Terms &amp; Conditions" required value={agree} onChange={(e)=>setAgree(e.target.value)}></CheckBox>

            <Button disabled={loading} type="submit"><span>Submit Now</span></Button>

            {error && <p className="error">{error}</p>}

            <div className="info">Already have an account? <Link href="/login">Login</Link> instead.</div>
        </Form>
    );
};

export default SignUpForm;