import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return(
    <BrowserRouter>
      <Navbar favoritesCount={favorites.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={
            <ProductsPage
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}/>
          } />
        <Route path="/products/:id" element={<ProductDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}