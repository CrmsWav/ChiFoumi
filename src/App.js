import "./App.css";
import Buttons from "./components/Buttons";
import Res from "./components/Result";
import Title from "./components/Title";
import Vs from "./components/Vs";
import Selection from "./components/Selection";

function App() {
  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        <div className="container">
          <Buttons />
          <Vs />
          <Selection />
          <Res />
        </div>
      </main>
      {/* <footer></footer> (à rajouter dans les keyframes de app.css en mode desktop et laptop(invisible en mode mobile)) */}
    </div>
  );
}

export default App;
