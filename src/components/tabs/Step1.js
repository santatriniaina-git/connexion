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
      <div className="w-1/2 px-8 flex flex-col justify-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 uppercase">Avant de créer un compte, quelques petites précisions sur Altee</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Nous proposons une large gamme de produits pour répondre à tous vos besoins.</li>
            <li className="mb-2">Nos produits sont fabriqués avec des matériaux de qualité supérieure.</li>
            <li className="mb-2">Nous nous engageons à fournir un service client exceptionnel à tous nos clients.</li>
            <li className="mb-2">Nous sommes fiers d'offrir des prix compétitifs sur tous nos produits.</li>
            <li className="mb-2">Notre équipe expérimentée est là pour vous aider à chaque étape du processus.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 uppercase">Nous nous distinguons principalement par la qualité du produit</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Nous effectuons des tests rigoureux sur tous nos produits pour garantir leur qualité.</li>
            <li className="mb-2">Nous utilisons des matériaux de qualité supérieure pour fabriquer tous nos produits.</li>
            <li className="mb-2">Nous sommes fiers d'offrir une garantie de qualité sur tous nos produits.</li>
            <li className="mb-2">Nous nous engageons à fournir des produits qui répondent aux normes les plus élevées de qualité.</li>
            <li className="mb-2">Nous sommes constamment à la recherche de moyens d'améliorer la qualité de nos produits.</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <ButtonConnexion />
        </form>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <img src={image} alt="description" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Step1;
