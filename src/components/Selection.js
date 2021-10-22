import React from "react";

function Selection() {
  const imagesPfc = {
    pierre: "/img/pierre.JPG",
    feuille: "/img/feuille.JPG",
    ciseaux: "/img/ciseaux.JPG",
  };

  return (
    <div className="row">
      <div className="pfc">
        <img
          id="selectionJoueur"
          src={imagesPfc.pierre}
          alt="selection joueur"
        />
        <img
          id="selectionAdversaire"
          src={imagesPfc.ciseaux}
          alt="selection adversaire"
        />
      </div>
    </div>
  );
}

export default Selection;
