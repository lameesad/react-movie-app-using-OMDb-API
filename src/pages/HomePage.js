import React, { useContext } from "react";

import { Link } from "react-router-dom";

import SearchMovieInput from "../components/SearchMovieInput";
import { MovieContext } from "../context/MovieContext";
import MovieLayout from "../components/MovieLayout";
import '../styles/home.css';
import LoginForm from "../components/LoginForm";

const Home = () => {
    const { setSearch, movies, Login, error, isLogged } = useContext(MovieContext);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    if (!isLogged) {
        return (
            <LoginForm Login={Login} error={error} />
        )
    }

    return (
        <>
            <div className="home-container">

                <SearchMovieInput handleSearch={handleSearch} />
                {/* We use here conditional rendering if their is movies related to the search movie input */}
                {movies?.length > 0 ? (
                    <div className="movies">
                        {movies?.map((movie) => {
                            return (
                                <Link
                                    to={`movies/${movie.imdbID}`}
                                    className="text-link"
                                    key={movie.imdbID}
                                >
                                    <MovieLayout
                                        key={movie.imdbID}
                                        image={movie.Poster}
                                        title={movie.Title}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                        <div className="search-warning text-center">
                            <p>Invalid movie name! please retry another name</p>
                        </div>
                    )}
            </div>
        </>
    );
};

export default Home;
