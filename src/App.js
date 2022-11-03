import "./App.css";
import Navbar from "./component/Navbar";
import ItemListContainer from "./component/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer prop="Hola soy una prop" /> {/* //* Mando la prop */}
    </div>
  );
}

export default App;
