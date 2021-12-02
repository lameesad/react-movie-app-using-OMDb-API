import React, { useContext } from 'react'
import LoginForm from '../components/LoginForm'
import { MovieContext } from "../context/MovieContext";
import { useState } from 'react';
import { Link, useHistory, Redirect } from "react-router-dom";
import { Home } from "../pages"

function Login() {
    const { user, error, Login } = useContext(MovieContext);
    const history = useHistory();


    return (
        <div className="login">
            {(user.email !== "") ? (
                <div className="welcome">
                    <Redirect to="/home" />
                </div>

            ) : (
                    <LoginForm Login={Login} error={error} />
                )}

        </div>
    )
}
export default Login