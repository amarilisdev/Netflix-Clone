import { Link } from "react-router-dom";

 function Header() {
   return (

    <header className="flex justify-between items-center px-6 py-4 bg-zinc-900 shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-6"><Link to="/">Netflix Clone</Link></h1>
        <nav>
          <ul className="flex space-x-4 text-white text-sm">
            <li className="hover:text-red-500 cursor-pointer"><Link to="/">Inicio</Link></li>
            <li className="hover:text-red-500 cursor-pointer"><Link to="/series">Series</Link></li>
            <li className="hover:text-red-500 cursor-pointer"><Link to="/peliculas">Películas</Link></li>
            <li className="hover:text-red-500 cursor-pointer"><Link to="/novedades">Novedades en Netflix</Link></li>
          </ul>
        </nav>
    </header>
    );
    }
export default Header;