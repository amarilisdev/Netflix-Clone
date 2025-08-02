import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


function MovieRow ({ title, url }) 
{
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(url);
                
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error("Error fetching movies:", error)
            }
        };    

  fetchMovies();
  }, [url, title]);

    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-none pb-4 max-w-full">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );

}

export default MovieRow;