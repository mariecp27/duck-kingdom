import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <FavoritesProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/duck-kingdom" exact element={<Home />} />
            <Route path="/duck-kingdom/products" element={<ItemListContainer />} />
            <Route path="/duck-kingdom/search" element={<ItemListContainer />} />
            <Route path="/duck-kingdom/search/:itemName" element={<ItemListContainer />} />
            <Route path="/duck-kingdom/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/duck-kingdom/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/duck-kingdom/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
