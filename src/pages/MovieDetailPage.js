import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import '../styles/movieDetail.css';
import defaultImage from "../images/default.png";


const MovieDetail = () => {
    let { id } = useParams();
    const { showDetail, selectedMovie } = useContext(MovieContext);
    useEffect(() => {
        showDetail(id);
    }, []);

    return (
        <div className="detail-container container flex-wrap flex-md-nowrap flex-lg-nowrap">
            <div className="poster">
                {selectedMovie.Poster === "N/A" ? (
                    <img src={defaultImage} alt={selectedMovie.Title} />
                ) : (
                        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                    )}
            </div>
            <div className="info container ml-lg-5 pt-5 pt-lg-0">
                <div className="field">
                    <div className="label">
                        <p className="title txt-detail">{selectedMovie.Title}</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        <p className="txt-detail">{selectedMovie.Genre}</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        <p className="txt-detail">{selectedMovie.Released} | {selectedMovie.Runtime} | {selectedMovie.Language} </p>
                    </div>
                </div>

                <div className="field">
                    <div className="label">
                        IMDB Rating: <p className="txt-detail">{selectedMovie.imdbRating}</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        Writer(s): <p className="txt-detail">{selectedMovie.Writer}</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        Country: <p className="txt-detail">{selectedMovie.Country}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MovieDetail;
