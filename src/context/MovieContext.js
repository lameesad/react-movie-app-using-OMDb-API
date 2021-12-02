import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const MovieContext = createContext();

const API_KEY = '5e23775'; // OMDb API Key

const MovieApp = ({ children }) => {

    const [movies, setMovies] = useState();
    const [search, setSearch] = useState('');
    const [selectedMovie, setSelectedMovie] = useState('');

    const userCred = {
        email: "lameesaboudarwish@gmail.com",
        password: "movieapp"
    }
    const [user, setUser] = useState({ email: "", password: "" })
    const [isLogged, setIsLogged] = useState(false)
    const [error, setError] = useState("")

    const Login = details => {
        console.log(details);
        if (details.email === userCred.email && details.password === userCred.password) {

            setIsLogged(true)
            setUser({
                name: details.name,
                email: details.email
            })

        } else {
            console.log("Details do not match!")
            setError("Email or password are incorrect")
        }
    }

    const Logout = () => {
        setIsLogged(false)
        setUser({ name: "", email: "" })

    }

    const fetchMovies = async (searchValue) => {
        const response = await axios(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
        );
        const data = response.data;
        setMovies(data.Search);
    };

    const showDetail = async (id) => {
        const response = await axios(
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );
        const data = response.data;
        setSelectedMovie(data);
    };

    useEffect(() => {
        console.log(API_KEY)
        fetchMovies(search);
    }, [search]);

    return (
        <MovieContext.Provider
            value={{
                setSearch,
                movies,
                showDetail,
                selectedMovie,
                user,
                error,
                Login,
                isLogged,
                setIsLogged,
                Logout
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

export default MovieApp;
