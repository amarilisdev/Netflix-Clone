import MovieRow from "../components/MovieRow";

function HomePage() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  return (
    <>
        <MovieRow title="Populares en Netflix" url={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`} />
        <MovieRow title="Series Más Vistas" url={`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`} />
        <MovieRow title="Novedades en Netflix" url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`} />
        <MovieRow title="Recomendaciones para Ti" url={`https://api.themoviedb.org/3/movie/603/recommendations?api_key=${API_KEY}&language=en-US`} />
    
    </>
  );
}

export default HomePage;