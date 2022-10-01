import React, { useState, useEffect } from "react";


const Contact = () => {
    const ANIMELS = 'https://pokeapi.co/api/v2/pokemon?limit=400'
    const [animes, setAnime] = useState([])
    useEffect(() => {
        fetch(ANIMELS)
            .then(res => res.json())
            .then(data => setAnime(data.results))
    }, [])
    console.log(animes);
    return (
        <div>
            {animes.splice(0,4).map(anime => {
                return (
                <div>
                    <img src="i'm"/>
                    <p>{anime.name}</p>
                </div>
                )
            })}

        </div>
    )
}
export default Contact