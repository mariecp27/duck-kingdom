import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";
import { CartContext } from "./context/CartContext";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {

  const [cart, setCart] = useState([]);

  const addToShoppingCar = (product) => {
    setCart([...cart, product]);
  }

  const productInCart = (id) => {
    return cart.some(product => product.id === id);
  }

  console.log(cart);

  return (
    <CartContext.Provider value={{
      addToShoppingCar,
      productInCart
    }} >
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
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
