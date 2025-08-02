import MovieRow from "../components/MovieRow";

function NovedadesPage() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  return (
    <>
        
        <MovieRow 
        title="Novedades en Netflix" 
        url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`} 
        />

        <MovieRow 
        title="Estrenos Recientes en Cines" 
        url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`} 
      />
      
      <MovieRow 
        title="Próximamente" 
        url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-ES`} 
      />
      
      <MovieRow 
        title="Tendencias de la Semana" 
        url={`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=es-ES`} 
      />

      <MovieRow 
        title="Novedades de Ciencia Ficción" 
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878&language=es-ES`} 
      />
        
    
    </>
  );
}

export default NovedadesPage;