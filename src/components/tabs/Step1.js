import React from 'react';
import ButtonConnexion from '../ButtonConnexion';

function Step1({ nextStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <div className="flex justify-between">
      <div className="w-1/2 mr-4">
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies mi in eros pharetra, sed aliquam elit volutpat. Nulla facilisi.</p>
        <form onSubmit={handleSubmit}>
          <ButtonConnexion />
        </form>
      </div>
      <div className="w-1/2">
        <img src="" alt="description" />
      </div>
    </div>
  );
}

export default Step1;
