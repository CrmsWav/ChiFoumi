import React from "react";

export default function Buttons() {
  const userChoices = ["pierre", "feuille", "ciseaux"];

  const clickPierre = (e) => {
    e.target.value = userChoices[0];
    console.log(e.target.value);
    // choice = e.target.value;
    // console.log();
  };
  const clickFeuille = (e) => {
    e.target.value = userChoices[1];
    console.log(e.target.value);
  };
  const clickCiseaux = (e) => {
    e.target.value = userChoices[2];
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="boutons">
        <img
          src="/img/btnPierre.PNG"
          className="boutonPierre"
          alt="bouton pierre"
          onClick={clickPierre}
        />
        <img
          src="/img/btnFeuille.PNG"
          className="boutonFeuille"
          alt="bouton feuille"
          onClick={clickFeuille}
        />
        <img
          src="/img/btnCiseaux.PNG"
          className="boutonCiseaux"
          alt="bouton ciseaux"
          onClick={clickCiseaux}
        />
      </div>
    </div>
  );
}
