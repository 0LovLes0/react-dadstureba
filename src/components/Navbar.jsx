import { Link } from "react-router-dom";

export default function Navbar({ favoritesCount }) {
  return (
    <nav className="bg-white text-gray-800 px-6 py-4 grid grid-cols-3 items-center shadow-md">
      <div></div>
      <div className="flex justify-center items-center gap-8">
        <Link to="/"
          className="hover:text-blue-600 transition text-xl font-medium">
          main
        </Link>
        <span className="h-6 w-px bg-gray-300"></span>
        <Link to="/products"
          className="hover:text-blue-600 transition text-xl font-medium">
          products
        </Link>
      </div>
      <div className="flex justify-end">
        <div className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium w-fit">
         favorite: {favoritesCount}
        </div>
      </div>
    </nav>
  );
}