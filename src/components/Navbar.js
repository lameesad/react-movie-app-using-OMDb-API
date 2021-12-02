import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { MovieContext } from "../context/MovieContext";



function Navbar() {
    const { isLogged, Logout } = useContext(MovieContext);
    return (
        <>



            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h2 className="navbar-brand" >Movie App</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end mr-4" id="navbarSupportedContent">
                    <ul className="navbar-nav ">

                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            {isLogged ? (
                                <Link className="nav-link" onClick={Logout} to="/login">Logout</Link>
                            ) : (
                                    <Link className="nav-link" to="/login">Login</Link>
                                )}

                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
export default Navbar