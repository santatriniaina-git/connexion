import React from "react";

function SidebarMenu ({ steps, currentStep, setCurrentStep }) {
  const renderSidebarMenu = () => (
    <div className="w-1/4 bg-[#F9F9F9] h-screen">
      <ul className="flex flex-col justify-start items-center py-4">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className={`w-full flex justify-center items-center mb-4 py-2 rounded-lg font-medium cursor-pointer transition duration-200 
              ${index + 1 === currentStep || index + 1 < currentStep ? "text-black" : "text-[#B0BEC5]"}
              ${step.name === "" && "hidden"}
            `}
            onClick={() => setCurrentStep(index + 1)}
          >
            {step.name}
          </li>
        ))}
      </ul>
    </div>
  );

  return renderSidebarMenu();
};

export default SidebarMenu;
