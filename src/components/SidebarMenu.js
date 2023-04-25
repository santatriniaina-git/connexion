import React from "react";
import logo from '../assets/logoAltee.svg';

function SidebarMenu({ steps, currentStep }) {
  const getStepIcon = (isSelectedStep, isPastStep) => {
    return (
      <span className="font-bold">
        {isSelectedStep || isPastStep ? (
          'X'
        ) : (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="#B0BEC5" stroke-width="2"/>
            <circle cx="15" cy="15" r="6.66667" fill="#B0BEC5"/>
          </svg>
        )}
      </span>
    );
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed inset-0 bg-[#F9F9F9] h-screen w-[37.5rem] flex flex-col justify-between z-0">
      <div className="flex items-center justify-start pl-8 py-8">
        <img src={logo} alt="Logo Altee" className="h-12 w-12" />
      </div>
      <ul className="flex flex-col justify-start items-center py-4">
        {steps.map((step, index) => {
          const isSelectedStep = index + 1 === currentStep;
          const isPastStep = index + 1 < currentStep;
          const isSelectedOrPastClass = isSelectedStep || isPastStep ? "text-black" : "text-[#B0BEC5]";
          const stepIcon = steps[index - 1]?.name && index !== 0 ? getStepIcon(isSelectedStep, isPastStep) : getStepIcon(true, false);
          return (
            <li
              key={step.name}
              className={`font-bebas text-[28px] font-normal leading-[34px] tracking-normal text-left w-full flex space-x-4 items-center mb-4 py-2 rounded-lg cursor-pointer transition duration-200
                ${isSelectedOrPastClass} ${step.name === "" ? "hidden" : ""} uppercase pl-14
              `}
            >
              {step.name !== "" && (
                <>
                  {stepIcon}
                  <span>{step.name}</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-start pl-8 py-8">
        <div className="font-poppins font-normal">
          <span className="font-bold text-black">&copy; Altee {currentYear}</span>&nbsp;
          <span>Vous possédez déjà un compte? &nbsp;</span>
          <a href="/se-connecter" className="font-poppins font-normal">Connectez-vous</a>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
