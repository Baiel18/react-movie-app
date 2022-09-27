import React, { useState, useEffect } from "react";
import Movie from './component/Movie'

const API_KEY = '365580a077bde095848bee15cf5a0299'
const MOVIE_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const dataRequest = (url) =>{
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }

  useEffect(() => {
    dataRequest(MOVIE_API)
  }, [])

 const handleOnSumbit = (e) => {
  e.preventDefault()
  dataRequest(SEARCH_API+search)
 }
 const handleOnChenge = e =>{
  setSearch(e.target.value);
 }

  return (
    <div className="header">
      <div className="container">
        <h1>React Move App Baiel</h1>
        <form onSubmit={handleOnSumbit}>
          <input placeholder="search..." onChange={handleOnChenge}/>
        </form>
      </div>
      <div className="container">
        <div className="card-list">
          {movies.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;