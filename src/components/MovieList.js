import React from "react";

const MovieList = (props) => {
  const FavouriteCompoent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={movie.imdbID}
        >
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => props.handleFavourite(movie)}
            className="overlay d-flex align-item-center justify-content-center"
          >
            <FavouriteCompoent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
