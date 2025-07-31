import React from "react";
import MovieRow from "./components/MovieRow";
            

function App() {
  
  const API_KEY = "";

  return (

    <div className="bg-black min-h-screen text-white p-4">
      {/*Header */}
      <header className="bg-black p-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-red-600">Netflix Clone</h1>
        <nav>
          <ul className="flex space-x-4 text-white text-sm">
            <li className="hover:text-red-600 cursor-pointer">Inicio</li>
            <li className="hover:text-red-600 cursor-pointer">Series</li>
            <li className="hover:text-red-600 cursor-pointer">Películas</li>
            <li className="hover:text-red-600 cursor-pointer">Novedades en Netflix</li>
          </ul>
        </nav>
      </header>

      {/*Main Content */}
      <main className="p-4">
        <MovieRow title="Populares en Netflix" url="https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US" />
        <MovieRow title="Series Más Vistas" url="https://api.themoviedb.org/3/tv/popular?api_key=&language=en-US"  />
        <MovieRow title="Novedades en Netflix" url="https://api.themoviedb.org/3/movie/now_playing?api_key=&language=en-US"  />
        <MovieRow title="Recomendaciones para Ti" url="https://api.themoviedb.org/3/movie/603/recommendations?api_key=&language=en-US"  />
      </main>
    </div>
  );
}

export default App;
