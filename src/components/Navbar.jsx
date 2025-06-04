import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex justify-center gap-8 text-white text-lg font-semibold p-6 z-20 bg-opacity-70">
      <Link to="/" className=" px-4 py-2 text-lg font-semibold transition duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-white hover:text-blue-600 hover:rounded-full">Inicio</Link>
      <Link to="/servicios" className="px-4 py-2 text-lg font-semibold transition duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-white hover:text-blue-600 hover:rounded-full">Servicios</Link>
      <Link to="/contacto" className="px-4 py-2 text-lg font-semibold transition duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-white hover:text-blue-600 hover:rounded-full">contacto</Link>
      <Link to="/experiencias" className="px-4 py-2 text-lg font-semibold transition duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-white hover:text-blue-600 hover:rounded-full">Experiencias</Link>

       </nav>
    </>
  );
}
