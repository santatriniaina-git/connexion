import React from 'react';
import ButtonConnexion from '../ButtonConnexion';
import image from '../../assets/CoverLogin3 1.svg';

const productFeatures = [
  "Il vous faudra moins de 60 secondes pour créer votre compte",
  "Votre compte est immédiatement utilisable de façon autonome grâce à nos formations interactives inclues",
  "Vous profitez d'un essai gratuit de 30 jours sans limite d'utilisation",
  "Aucune carte de crédit est nécessaire",
  "Nos experts sont disponibles pour vous aider à tout moment dans l’espace messagerie/formation en bas à droite."
];

const qualityFeatures = [
  "Altee n’a pas de durée minimale d’engagement",
  "L’ensemble des fonctionnalitées sont toujours disponibles pour vous aider à gagner du temps",
  "Vous restez propriétaire de vos données donc les informations saisies sont exportables à tout moment",
  "La tarification est 100% transparente et sans surprises (voir ici)",
  "Vos besoins sont une priorité. N’hésitez pas à nous demander des ajouts" 
];

function FeatureList({ features }) {
  return (
    <ul className="list-disc">
      {features.map((item, index) => (
        <li
          className="flex flex-row items-center mb-[0.438rem] p-5 gap-x-4 rounded-md bg-gray-100"
          key={index}
        >
          <p className="mr-3">
          <svg
            width="18" 
            height="18"
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
          </p>
          <p className="text-[13px] leading-5 font-poppins font-normal text-gray-600">{item}</p>
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
      <div className="w-1/2 px-16 flex flex-col justify-between">
        <div className="mb-8 h-full">
          <h2 className="font-bebas font-normal text-[25px] leading-[25px] text-gray-800 flex items-center tracking-tighter mb-4 uppercase">Avant de créer votre compte, quelques petites précisions</h2>
          <FeatureList features={productFeatures} />
        </div>
        <div className="mb-8 h-full">
          <h2 className="font-bebas font-normal text-[25px] leading-[25px] text-gray-800 flex items-center tracking-tighter mb-4 uppercase">Aucun engagement, nous laissons la qualité de l’app parler d’elle même</h2>
          <FeatureList features={qualityFeatures} />
        </div>
        <form onSubmit={handleSubmit}>
          <ButtonConnexion width="w-[24.125rem]"/>
        </form>
      </div>
      <div className="w-1/2 pr-16 h-full flex items-center justify-center">
        <img src={image} alt="description" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Step1;
