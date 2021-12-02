import React from 'react';
import '../styles/movieLayout.css';
import defaultImage from "../images/default.png";


const MovieLayout = ({ image, title }) => {
    return (
        <div className='card'>


            {image === 'N/A' ? (
                <img src={defaultImage} alt={title} height="300px" />
            ) : (
                    <img src={image} alt={title} height="300px" />
                )}

            <div className='info'>
                <span className='title'>{title}</span>
            </div>
        </div>
    );
};

export default MovieLayout;