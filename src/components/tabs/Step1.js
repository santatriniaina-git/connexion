import React from 'react';
import ButtonConnexion from '../ButtonConnexion';
import image from '../../assets/images.PNG';

function Step1({ nextStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <div className="mx-auto h-screen flex justify-between">
      <div className="w-1/2 mr-8 flex flex-col justify-center">
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies mi in eros pharetra, sed aliquam elit volutpat. Nulla facilisi.</p>
        <form onSubmit={handleSubmit}>
          <ButtonConnexion />
        </form>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <img src={image} alt="description" className="object-cover h-full" />
      </div>
    </div>
  );
}

export default Step1;
