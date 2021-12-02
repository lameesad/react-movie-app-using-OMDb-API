import React from 'react'
import { useState, useContext } from 'react';
import '../styles/loginForm.css';
import { MovieContext } from "../context/MovieContext";

function LoginForm({ Login, error }) {
    const { isLogged } = useContext(MovieContext);

    const [details, setDetails] = useState({ email: "", password: "" })
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner container">
                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-title">
                            Movie App Login
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <div className="form-group">
                                    <label className="form-control-label">EMAIL</label>
                                    <input type="email" name="email" id="email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" name="password" id="password" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} />
                                </div>
                                {(error != "") ? (
                                    <div className="error">
                                        {error}
                                    </div>
                                ) : ""}
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                    </div>
                                    <div className="col-lg-12 text-center login-btm login-button">
                                        <input className="btn btn-outline-primary" type="submit" value="LOGIN" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    )
}
export default LoginForm