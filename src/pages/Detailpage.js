import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const Detailpage = () => {
    const { id } = useParams()
    const API_KEY = '365580a077bde095848bee15cf5a0299'
    const IMG_URL = 'https://image.tmdb.org/t/p/w1280'
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    const AKTER = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    const VIDEO = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
    const [info, setInfo] = useState([]);
    const [akter, setAkter] = useState([]);
    const [videos, setVideo] = useState([]);

    useEffect(() => {
        fetch(MOVIE_URL)
            .then(res => res.json())
            .then(data => setInfo(data))
    }, []);
    useEffect(() => {
        fetch(AKTER)
            .then(res => res.json())
            .then(data => setAkter(data.cast))
    }, []);
    useEffect(() => {
        fetch(VIDEO)
            .then(res => res.json())
            .then(data => setVideo(data.results))
    }, []);
    return (
        <>


            <div className="poster">
                <div className="container">
                    <div className="detail-info">
                        <img className="movie_photo" src={IMG_URL + info.poster_path} />
                        <div className="overview">
                            <span>{info.overview}</span>
                            <p>Budjet: <span className="budget">{info.budget} $</span></p>
                            <h3>media type: {info.media_type}</h3>
                            <h3>release date: {info.release_date}</h3>
                            <h3>vote count: {info.vote_count}</h3>
                           <div className="aktery">
                            {akter.splice(0, 3).map(akters => {
                                return <div className="acters" key={akters.id}>                                    
                                    <img className="aktersImg" src={IMG_URL + akters.profile_path} /><h2>{akters.name}</h2>
                                </div>
                            })}
                            </div>
                            <button className="buttonMovie">смотреть</button>

                            {videos.splice(0, 1).map(video => {
                                return (
                                    <div>
                                        <h1 className="budget">{video.name}</h1>
                                        <iframe className="youtube" 
                                            src={`https://www.youtube.com/embed/${video.key}`}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>
            </div>

        </>
    );




}
export default Detailpage