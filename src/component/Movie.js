import React from "react";
import { Link } from "react-router-dom";

const IMG_URL = 'https://image.tmdb.org/t/p/w1280'

function Movie({movie}){
    console.log(movie);
    const setColor =(num)=>{
        if(num >= 8){
            return 'red'
        }
    }
    return(
        <Link to={`/movie/${movie.id}`} className="card">
        <img src={IMG_URL+movie.poster_path}/>
        <div className="info">
            <h3>{movie.title}</h3>
            <p className={`rate ${setColor(movie.vote_average)}`}>{movie.vote_average}</p>
        </div>

        </Link >
    )
}
export default Movie