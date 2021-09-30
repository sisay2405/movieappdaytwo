import "./App.css";
import { useEffect, useState } from "react";

function App(rating) {
  const [movieData, setMovieData] = useState({});
  // const [searchText, setSearchText] = useState("");

  const requestByTitle = async (movieName) => {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_KEY}`
    );

    const data = await res.json();
    setMovieData(data);
  };

  const requestByID = async (id, cb) => {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`
    );
    const data = await res.json();
  };

  useEffect(() => {
    requestByTitle(" Batman v Superman");
    //  requestByTitle("The god father");
  }, []);

 

  return (
    <div className="App">
   
    <div className="movie-img"> 
    <img src={movieData?.Poster} alt="broken image" /> </div>
      <div className="movie-description">
      <div className="both">
        <h3 className="title"> {movieData?.Title}</h3>
        <h3 className="rating">{movieData?.imdbRating}</h3>
      </div>
     
     {/* {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>{movieData?.Ratings[0].Value}</p>
                ))}       */}
        <h3 className="rated"> {movieData?.Rated}</h3>
        <h3 className="runtime"> {movieData?.Runtime}</h3>
        
        <h3 className="genre"> {movieData?.Genre}</h3>
        <h3> Plot</h3>
        <h3 className="plot"> {movieData?.Plot}</h3>
        <h3> Actors</h3>
        <h3 className="actors">Actors: {movieData?.Actors}</h3> 
      </div>
    </div>
  );
}


export default App;