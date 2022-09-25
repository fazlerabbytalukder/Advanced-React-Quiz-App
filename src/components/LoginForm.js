import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button';
import Form from './pages/Form';
import TextInput from './TextInput';
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.push("/");
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Faild to login");
        }
    }

    return (
        <Form style={{height:"330px"}} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter email"
                required
                icon="alternate_email"
                value={email} onChange={(e)=>setEmail(e.target.value)}
            />

            <TextInput type="password" placeholder="Enter password" required icon="lock" value={password} onChange={(e)=>setPassword(e.target.value)} />

            <Button disabled={loading} type="submit"><span>Submit Now</span></Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
};

export default LoginForm;