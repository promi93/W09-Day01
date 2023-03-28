import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent printedName="Clicca Qui" />
        <h1>Esercizio React.js</h1>
        <ImageComponent image="https://placekitten.com/g/200/300" />
      </header>
    </div>
  );
}

export default App;
