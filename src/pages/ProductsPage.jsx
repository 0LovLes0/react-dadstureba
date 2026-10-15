import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage({ favorites, onToggleFavorite }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((res)=>res.json())
      .then((data)=> {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if(loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.92_0.02_65.5)]">
        <p className="text-xl text-gray-800">loading..</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.92_0.02_65.5)] px-6 py-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        PRODUCTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isFavorite={favorites.includes(product.id)}
            onToggleFavorite={onToggleFavorite}/>
        ))}
      </div>
    </div>
  );
}