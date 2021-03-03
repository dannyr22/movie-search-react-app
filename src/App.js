import Movie from "./components/Movie";
import { useState, useEffect } from 'react';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=8df64e81e90a553c8860edc74577d392&query="


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=8df64e81e90a553c8860edc74577d392&query=";

function App() {
  const [movies, setMovies] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getMovies()
    .then(data => setMovies(data.results))
    .catch(err => console.log(err))
  }, [])

  const getMovies = async () => {
    const response = await fetch(FEATURED_API)
    const data = await response.json()
    return data 
  }
  const searchMovies = async () => {
    const response = await fetch(SEARCH_API + searchInput)
    const data = await response.json()
    return data 
}

  const submitHandler = (e) => {
    e.preventDefault()
    
    searchMovies()
    .then(data => setMovies(data.results))
      .catch(err => console.log(err))
    
    setSearchInput('')
  }

  const changeHandler = (e) => {
    setSearchInput(e.target.value.trim())
    console.log(searchInput)
  }

  return (
    <>
      <header>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="search..."
            className="search"
            value={searchInput}
            onChange={changeHandler}/>
        </form>
      </header>
      <div className="movie-container">
        {movies && movies.map(movie => (
          <Movie key={movie.id} {...movie}/>
        ))}
        </div>
    </>
  );
}

export default App;
