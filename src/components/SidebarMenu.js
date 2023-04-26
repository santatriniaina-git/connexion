import React from "react";
import logo from '../assets/Group 3539.svg';

function SidebarMenu({ steps, currentStep }) {
  const getStepIcon = (isSelectedStep, isPastStep, isFirstStep) => {
    if (isFirstStep) {
      return (<span className="font-bold"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#2A353D" stroke-width="2.2"/>
      <path d="M13.1992 11.8C13.1992 10.2536 14.4528 9 15.9992 9C17.5456 9 18.7992 10.2536 18.7992 11.8C18.7992 12.3574 18.6363 12.8768 18.3556 13.3131C17.5188 14.6135 15.9992 15.8536 15.9992 17.4V18.1" stroke="#2A353D" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M15.988 23H16.0006" stroke="#2A353D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </span>);
    }
    return (
      <span className="font-bold">
        {isSelectedStep || isPastStep ? (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="14" stroke="#2C2C31" stroke-width="2"/>
          <svg x="7.5" y="9" width="15" height="12" viewBox="0 0 15 12">
            <path d="M13.8333 1.75L5.12496 10.4583L1.16663 6.5" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </svg>        
        ) : (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="#B0BEC5" strokeWidth="2"/>
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
          const isFirstStep = index === 0;
          const stepIcon = steps[index - 1]?.name && !isFirstStep ? getStepIcon(isSelectedStep, isPastStep, isFirstStep) : getStepIcon(true, false, isFirstStep);
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
