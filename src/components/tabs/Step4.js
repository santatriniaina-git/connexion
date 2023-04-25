import React from 'react';
import BigDisclosure from '../disclosure/BigDisclosure';
import ButtonConnexion from '../ButtonConnexion';

function Step4({ nextStep }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        nextStep();
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">VOS BESOINS</label>
        <BigDisclosure
        title={("Raisons de refus")}
        classParent="arh-bg-white arh-my-[0.5rem] arh-px-[1rem] arh-py-[0.5rem]"
      >
       text1
      </BigDisclosure>
      <BigDisclosure
        title={("Sources des candidatures")}
        classParent="arh-bg-white arh-my-[0.5rem] arh-px-[1rem] arh-py-[0.5rem]"
      >
      text2
      </BigDisclosure>
        <ButtonConnexion width="w-[441px]"/>
      </form>
    );
  }

export default Step4;
  