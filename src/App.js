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
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Home />} />
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
  );
}

export default App;
