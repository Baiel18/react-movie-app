import React from "react";

const IMG_URL = 'https://image.tmdb.org/t/p/w1280'

function Movie({movie}){
    console.log(movie);
    const setColor =(num)=>{
        if(num >= 8){
            return 'red'
        }
    }
    return(
        <div className="card">
        <img src={IMG_URL+movie.poster_path}/>
        <div className="info">
            <h3>{movie.title || movie.name}</h3>
            <p className={`rate ${setColor(movie.vote_average)}`}>{movie.vote_average}</p>
            <span className="overviem">{movie.overview.slice(0,220)}...</span>
        </div>
        
      
        
        </div>
        
    )
}
export default Movie