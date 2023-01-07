import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      {/* <ItemDetailContainer productId={19} /> */}
    </div>
  );
}

export default App;
