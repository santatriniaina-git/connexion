import React from 'react';

function Step2({ nextStep }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        nextStep();
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Step2</label>
        <input type="text" id="name" name="name" className="block w-full mt-2" required />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4">
          Next
        </button>
      </form>
    );
  }

export default Step2;
  