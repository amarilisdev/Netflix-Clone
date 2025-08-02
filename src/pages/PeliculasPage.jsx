import MovieRow from "../components/MovieRow";

function PeliculasPage() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  return (
    <>
      <MovieRow title="Populares en Netflix" url={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`} />
      <MovieRow title="Estrenos en Cines" url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`} />
      <MovieRow title="Las Más Valoradas" url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es-ES`} />
      <MovieRow title="Populares" url={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`} />
      <MovieRow title="Próximamente" url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-ES`} />
      
    </>
  );
}

export default PeliculasPage;