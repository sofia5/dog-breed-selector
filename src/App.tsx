import "./App.scss";
import Header from "./components/Header";
import DogPicker from "./components/DogPicker";

function App() {
  return (
    <>
      <Header />
      <div className="main-content-wrapper">
        <DogPicker />
      </div>
    </>
  );
}

export default App;
