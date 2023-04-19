import React from "react";

function SidebarMenu({ steps, currentStep, setCurrentStep }) {
  return (
    <div className="w-1/4 bg-[#F9F9F9] h-screen flex flex-col justify-center">
      <ul className="flex flex-col justify-start items-center py-4">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className={`w-full flex justify-start items-center mb-4 py-2 rounded-lg font-medium cursor-pointer transition duration-200 
            ${index + 1 === currentStep || index + 1 < currentStep ? "text-black" : "text-[#B0BEC5]"}
            ${step.name === "" && "hidden"} uppercase pl-14
        `}
            onClick={() => setCurrentStep(index + 1)}
          >
            {step.name !== "" && (
              <>
                {steps[index - 1]?.name !== "" && index !== 0 ? (
                  <>
                    {index + 1 === currentStep || index + 1 < currentStep ? (
                      <span className="font-bold text-black">X</span>
                    ) : (
                      <span className="font-bold text-[#B0BEC5]">Y</span>
                    )}
                  </>
                ) : (
                  <span className="font-bold text-black">X</span>
                )}
                <span>{step.name}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
