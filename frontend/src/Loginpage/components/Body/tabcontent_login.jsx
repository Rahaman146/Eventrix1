import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from "./cards";
import Button from "./button";
import Tabhead from "./tabhead";
import cardcontent_login from "./cardcontent_login";

function Tabscontent_login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                password
            });

            if (response.data.success) {
                setSuccess('Login successful!');
                setError('');
                setTimeout(() => {
                    navigate("/home");
                }, 1000);
            } else {
                setError('Invalid username or password');
                setSuccess('');
            }
        } catch (error) {
            setError('Invalid username or password');
            setSuccess('');
        }
    };

    return (
        <div className="signup-tab-content">
            <Tabhead />
            <div className="signup_signup-form-block">
                <form className="signup_signup-form" onSubmit={handleSubmit}>
                    {cardcontent_login.map((Carditem) => (
                        <Cards
                            key={Carditem.key}
                            title={Carditem.title}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    ))}

                    <div className="password_login-wrapper">
                        <div className="password_login">
                            <div className="password_login-1">Password*</div>
                            <a href="#" className="password_login-2">Forgot your password?</a>
                        </div>
                        <input
                            className="signup_form_input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button />

                    {error && (
                        <div className="login_message login_message-error">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="login_message login_message-success">
                            {success}
                        </div>
                    )}


                    <div className="noaccount_login">
                        <div
                            className="noaccount_login-1"
                            onClick={() => navigate("/signin")}
                            style={{ cursor: "pointer", color: "black", textDecoration: "underline" }}
                        >
                            Don't have an account? Sign up
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Tabscontent_login;


