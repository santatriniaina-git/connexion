import React from "react";

function SidebarMenu({ steps, currentStep, setCurrentStep }) {
  return (
    <div className="w-1/4 bg-[#F9F9F9] h-screen flex flex-col justify-center">
      <ul className="flex flex-col justify-start items-center py-4">
        {steps.map((step, index) => {
          const isSelectedStep = index + 1 === currentStep;
          const isPastStep = index + 1 < currentStep;
          const isHiddenStep = step.name === "";
          const isPreviousStepNameValid = steps[index - 1]?.name && index !== 0;
          const isSelectedOrPastClass = isSelectedStep || isPastStep ? "text-black" : "text-[#B0BEC5]";
          const selectedOrPastIcon = isSelectedStep || isPastStep ? "X" : "Y";
          const stepIcon = isPreviousStepNameValid
            ? <span className="font-bold">{selectedOrPastIcon}</span>
            : <span className="font-bold">X</span>;          
          return (
            <li
              key={step.name}
              className={`w-full flex justify-start items-center mb-4 py-2 rounded-lg font-medium cursor-pointer transition duration-200
                ${isSelectedOrPastClass} ${isHiddenStep ? "hidden" : ""} uppercase pl-14
              `}
              onClick={() => setCurrentStep(index + 1)}
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
    </div>
  );
}

export default SidebarMenu;
