import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.92_0.02_65.5)]">
        <p className="text-xl text-gray-600">loading...</p>
      </div>
    );
  }

  const oldPrice = (product.price * 1.4).toFixed(2);

  return (
    <div className="min-h-screen bg-[oklch(0.92_0.02_65.5)] grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gray-100 flex items-center justify-center p-10 md:p-16">
        <img src={product.image} alt={product.title}
          className="max-h-[70vh] w-auto object-contain"
 />
      </div>

      <div className="flex flex-col justify-center px-8 py-12 md:px-16">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-900 mb-4">
          {product.title}
        </h1>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-xl text-gray-400 line-through">
            ${oldPrice}
          </span>
        </div>

        <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
          {product.description}
        </p>
      </div>
    </div>
  );
}