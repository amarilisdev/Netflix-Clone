import React from "react";

function MovieCard({ movie }) {

  return (
    <div className="min-w-[150px] flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300">
      <img 
        className="rounded-lg" 
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
        alt={movie.title || movie.name}
      />
        <p className="mt-2 text-sm text-center">{movie.title || movie.name}</p>
    </div>
  );
}

export default MovieCard;