import React, { useEffect, useState } from "react";
import "./App.css";
import Vs from "./components/Vs";

function App() {
  const imagesPfc = {
    pierre: "/img/pierre.JPG",
    feuille: "/img/feuille.JPG",
    ciseaux: "/img/ciseaux.JPG",
  };
  const imageResult = {
    win: "/img/gagne.PNG",
    lose: "/img/perdu.PNG",
    draw: "/img/egalite.png",
  };

  const [choixJoueur, setChoixJoueur] = useState(imagesPfc.feuille);
  const [choixOrdi, setChoixOrdi] = useState(imagesPfc.ciseaux);
  const [resultat, setResultat] = useState(imageResult.lose);

  const choixOrdiAleatoire = () => {
    const choix = Math.floor(Math.random() * 3);

    switch (choix) {
      case 0:
        setChoixOrdi(imagesPfc.pierre);
        break;
      case 1:
        setChoixOrdi(imagesPfc.feuille);
        break;
      case 2:
        setChoixOrdi(imagesPfc.ciseaux);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (choixJoueur === choixOrdi) {
      setResultat(imageResult.draw);
    } else if (
      (choixJoueur === imagesPfc.pierre && choixOrdi === imagesPfc.ciseaux) ||
      (choixJoueur === imagesPfc.feuille && choixOrdi === imagesPfc.pierre) ||
      (choixJoueur === imagesPfc.ciseaux && choixOrdi === imagesPfc.feuille)
    ) {
      setResultat(imageResult.win);
    } else {
      setResultat(imageResult.lose);
    }
  }, [choixJoueur, choixOrdi]);

  const onClickPierre = () => {
    setChoixJoueur(imagesPfc.pierre);
    choixOrdiAleatoire();
  };

  const onClickFeuille = () => {
    setChoixJoueur(imagesPfc.feuille);
    choixOrdiAleatoire();
  };

  const onClickCiseaux = () => {
    setChoixJoueur(imagesPfc.ciseaux);
    choixOrdiAleatoire();
  };

  console.log(" ");
  console.log("choix joueur :" + choixJoueur);
  console.log("choix ordi : " + choixOrdi);
  console.log("resultat : " + resultat);

  return (
    <div className="App">
      <header>
        <h1>
          <img src="/img/chifoumi.PNG" alt="logo" />
        </h1>
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
                src={choixOrdi}
                alt="selection adversaire"
              />
            </div>
          </div>

          <div className="resultats">
            <img src="/img/resultat.PNG" className="resultat" alt="Résultat" />
            <img src={resultat} id="gagnerPerdu" alt={resultat} />
          </div>
        </div>
      </main>
      {/* <footer></footer> (à rajouter dans les keyframes de app.css en mode desktop et laptop(invisible en mode mobile)) */}
    </div>
  );
}

export default App;
