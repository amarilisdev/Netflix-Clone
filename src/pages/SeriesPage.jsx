import MovieRow from "../components/MovieRow";

function SeriesPage() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  return (
    <>
        
      <MovieRow title="Series Más Vistas" url={`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`} />
      <MovieRow title="Series Populares" url={`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=es-ES`} />
      <MovieRow title="Series Mejor Valoradas" url={`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=es-ES`} />
      <MovieRow title="En Emisión Hoy" url={`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=es-ES`} />
        
    
    </>
  );
}

export default SeriesPage;