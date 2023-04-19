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
        <input type="text" id="name" name="name" className="block w-full mt-2" required />
        <ButtonConnexion/>
      </form>
    );
  }

export default Step4;
  