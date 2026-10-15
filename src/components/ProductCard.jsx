import { Link } from "react-router-dom";

export default function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title}
          className="h-48 object-contain mb-4 mx-auto cursor-pointer" />
        <h3 className="text-sm font-semibold text-black-800 line-clamp-2 mb-2 hover:text-cyan-800 transition">
          {product.title}
        </h3>
      </Link>
      <p className="text-lg font-bold text-cyan-700 mb-4">${product.price}</p>
      <button onClick={() => onToggleFavorite(product.id)}
        className={`py-3 text-lg rounded-md font-italic transition cursor-pointer flex items-center justify-center gap-3 ${
          isFavorite ? "bg-cyan-700 text-white" : "bg-cyan-100 text-black-800 hover:bg-cyan-300"
        }`}>
        {isFavorite ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            favorited
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            add
          </>
        )}
      </button>
    </div>
  );
}