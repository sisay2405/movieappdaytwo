import React, { useEffect, useState } from 'react'

import {   getMoviesBySearchTerm } from '../Components/utils'

const MovieCard = (SearchTerm) => {
    const [Movies, setMovies] = useState([])
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
       getMoviesBySearchTerm (SearchTerm).then(movieData => {
          console.log(movieData);
          setMovies(movieData);
        });
    }, [])
       const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const launchSearch = () => {
    MovieCard(searchText);
  };
    return (
        <div>
             <form
        onSubmit={(e) => {
          e.preventDefault();
          launchSearch();
        }}
      >
        <input onChange={(e) => onChange(e)} type="text" />
        <button>Search</button>
      </form>
            {Movies.map((Movie) => {
                return  <div key ={Movie.imdbID}>
                 <div>{Movies?.Title}</div>
                    <img src={Movies?.Poster} alt="" />
                    </div>
              }) } 
        </div>
    )
}

export default MovieCard