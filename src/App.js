import React, { useState } from "react";
import "./App.css";
import Res from "./components/Result";
import Title from "./components/Title";
import Vs from "./components/Vs";

function App() {
  const imagesPfc = {
    pierre: "/img/pierre.JPG",
    feuille: "/img/feuille.JPG",
    ciseaux: "/img/ciseaux.JPG",
  };

  const [choixJoueur, setChoixJoueur] = useState(imagesPfc.feuille);

  const onClickPierre = () => {
    setChoixJoueur(imagesPfc.pierre);
  };
  const onClickFeuille = () => {
    setChoixJoueur(imagesPfc.feuille);
  };
  const onClickCiseaux = () => {
    setChoixJoueur(imagesPfc.ciseaux);
  };

  console.log(choixJoueur);
  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        <div className="container">
          <div className="boutons">
            <img
              src="/img/btnPierre.PNG"
              className="boutonPierre"
              alt="bouton pierre"
              onClick={onClickPierre}
            />
            <img
              src="/img/btnFeuille.PNG"
              className="boutonFeuille"
              alt="bouton feuille"
              onClick={onClickFeuille}
            />
            <img
              src="/img/btnCiseaux.PNG"
              className="boutonCiseaux"
              alt="bouton ciseaux"
              onClick={onClickCiseaux}
            />
          </div>

          <Vs />

          <div className="row">
            <div className="pfc">
              <img
                id="selectionJoueur"
                src={choixJoueur}
                alt="selection joueur"
              />
              <img
                id="selectionAdversaire"
                src={imagesPfc.feuille}
                alt="selection adversaire"
              />
            </div>
          </div>

          <Res />
        </div>
      </main>
      {/* <footer></footer> (à rajouter dans les keyframes de app.css en mode desktop et laptop(invisible en mode mobile)) */}
    </div>
  );
}

export default App;
