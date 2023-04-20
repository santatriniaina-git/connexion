import React from 'react';

function ButtonConnexion() {
  return (
    <button type="submit" className="bg-black text-white font-bold py-3.5 px-4 mt-4 rounded-md relative">
      Continuer
      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
        &rarr;
      </span>
    </button>
  );
}

export default ButtonConnexion;
