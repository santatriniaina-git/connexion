import React from 'react';
import ButtonConnexion from '../ButtonConnexion';

function Step1({ nextStep }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        nextStep();
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <ButtonConnexion/>
      </form>
    );
  }

export default Step1;
  