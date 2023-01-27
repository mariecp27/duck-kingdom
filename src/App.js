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
import { ModalProvider } from "./context/ModalContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <ModalProvider>
      <FavoritesProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/duck-kingdom" element={<Home />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route path="/search" element={<ItemListContainer />} />
              <Route path="/search/:itemName" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </CartProvider>
      </FavoritesProvider>
    </ModalProvider>
  );
}

export default App;
