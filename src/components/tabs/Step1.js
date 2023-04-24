import React from 'react';
import ButtonConnexion from '../ButtonConnexion';
import image from '../../assets/images.PNG';

const productFeatures = [
  'Nous proposons une large gamme de produits pour répondre à tous vos besoins.',
  'Nos produits sont fabriqués avec des matériaux de qualité supérieure.',
  'Nous nous engageons à fournir un service client exceptionnel à tous nos clients.',
  'Nous sommes fiers d\'offrir des prix compétitifs sur tous nos produits.',
  'Notre équipe expérimentée est là pour vous aider à chaque étape du processus.'
];

const qualityFeatures = [
  'Nous effectuons des tests rigoureux sur tous nos produits pour garantir leur qualité.',
  'Nous utilisons des matériaux de qualité supérieure pour fabriquer tous nos produits.',
  'Nous sommes fiers d\'offrir une garantie de qualité sur tous nos produits.',
  'Nous nous engageons à fournir des produits qui répondent aux normes les plus élevées de qualité.',
  'Nous sommes constamment à la recherche de moyens d\'améliorer la qualité de nos produits.'
];

function FeatureList({ features }) {
  return (
    <ul className="list-disc">
      {features.map((item, index) => (
        <li
          className="mb-2 py-5 pl-4 pr-4 rounded-md bg-gray-100 flex items-center"
          key={index}
        >
          <svg
            className="w-4 h-4 mr-3"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4287 6.49519L7.77273 12.6654L4.57128 9.17288L5.77753 8.06715L7.77273 10.2437L12.2225 5.38946L13.4287 6.49519Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM9 1.63636C4.93318 1.63636 1.63636 4.93318 1.63636 9C1.63636 13.0668 4.93318 16.3636 9 16.3636C13.0668 16.3636 16.3636 13.0668 16.3636 9C16.3636 4.93318 13.0668 1.63636 9 1.63636Z"
              fill="black"
            />
          </svg>
          <p className="text-base font-medium text-gray-600">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function Step1({ nextStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <div className="mx-auto h-screen flex justify-between">
      <div className="w-3/5 px-16 flex flex-col justify-between">
        <div className="mb-8 h-full">
          <h2 className="font-bebas font-bold text-25 leading-25 tracking-tighter text-left mb-4 uppercase">Avant de créer un compte, quelques petites précisions sur Altee</h2>
          <FeatureList features={productFeatures} />
        </div>
        <div className="mb-8 h-full">
          <h2 className="font-bebas font-bold text-25 leading-25 tracking-tighter text-left mb-4 uppercase">Nous nous distinguons principalement par la qualité du produit</h2>
          <FeatureList features={qualityFeatures} />
        </div>
        <form onSubmit={handleSubmit}>
          <ButtonConnexion />
        </form>
      </div>
      <div className="w-2/5 pr-16 h-full flex items-center justify-center">
        <img src={image} alt="description" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Step1;
