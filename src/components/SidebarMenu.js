import React from "react";
import logo from '../assets/logo192.png';

function SidebarMenu({ steps, currentStep }) {
  const getStepIcon = (isSelectedStep, isPastStep) => {
    if (isSelectedStep || isPastStep) {
      return <span className="font-bold">X</span>;
    } else {
      return <span className="font-bold">Y</span>;
    }
  };

  return (
    <div className="fixed inset-0 bg-[#F9F9F9] h-screen w-1/4 flex flex-col justify-between z-0">
      <div className="flex items-center justify-start pl-8 py-2">
        <img src={logo} alt="Logo Altee" className="h-8 w-auto" />
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
              className={`w-full flex space-x-4 items-center mb-4 py-2 rounded-lg font-medium cursor-pointer transition duration-200
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
      <div className="flex items-center justify-start pl-8 py-2">
        <span className="text-gray-400 text-sm">&copy; 2023 Votre entreprise</span>
      </div>
    </div>
  );
}

export default SidebarMenu;
