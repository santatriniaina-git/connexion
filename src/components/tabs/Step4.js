import React from 'react';
import ButtonConnexion from '../ButtonConnexion';

function Step4({ nextStep }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        nextStep();
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Step4</label>
        <ButtonConnexion width="w-[441px]"/>
      </form>
    );
  }

export default Step4;
  