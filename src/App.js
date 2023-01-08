import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/search" element={ <ItemListContainer /> } />
          <Route path="/search/:itemName" element={ <ItemListContainer /> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
