import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280/";

const Movie = ({ poster_path, title, overview, vote_average }) => {

  const setVoteClass = (vote) => {
    if (vote >= 7) {
      return 'green'
    } else if (vote >= 5) {
      return 'yellow'
    } else {
      return 'red'
    }
  }
  return (
    <div className='movie'>
      <img src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80'} alt="title" />
      <movie className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </movie>
      
      <div className="movie-overview">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie
