import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SeriesPage from  "./pages/SeriesPage";
import PeliculasPage from "./pages/PeliculasPage";
import NovedadesPage from "./pages/NovedadesPage";

            

function App() {

  return (
    
      <div className="bg-black min-h-screen text-white">
        <Header />
        
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/peliculas" element={<PeliculasPage />} />
            <Route path="/novedades" element={<NovedadesPage />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
