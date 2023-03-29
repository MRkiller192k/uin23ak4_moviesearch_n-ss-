import React from 'react';
import { Link } from "react-router-dom";
const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => ( 
            
        <div className="d-flex justify-content-start m-3"  style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt='movie'></img>
            <Link to={`movie/${movie.imdbID}`}>Les mer</Link>
           
        </div >
        ))}
        </>
    )
};


export default MovieList;