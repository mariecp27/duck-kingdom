import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ <Navigate to={"/"} /> } />
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
