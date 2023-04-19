import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const steps = [
    { name: "Étape 1", component: <Step1 nextStep={nextStep} /> },
    {
      name: "Étape 2",
      component: <Step2 nextStep={nextStep} />,
    },
    {
      name: "Étape 3",
      component: <Step3 nextStep={nextStep}/>,
    },
    {
      name: "Étape 4",
      component: <Step4 nextStep={nextStep} />,
    },
    { name: "", component: <Step5 /> },
  ];

  const renderStep = () => {
    return steps[currentStep - 1].component;
  };

  const renderSidebarMenu = () => {
    return (
      <div className="w-1/4 bg-gray-200 h-screen">
        <ul className="flex flex-col justify-start items-center py-4">
          {steps.map((step, index) => (
            <li
              key={step.name}
              className={`w-full flex justify-center items-center mb-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-300 cursor-pointer transition duration-200 ${
                index + 1 === currentStep && "bg-blue-500 text-white"
              } ${step.name === "" ? "hidden" : ""}`}
              onClick={() => setCurrentStep(index + 1)}
            >
              {step.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-row max-w-7xl mx-auto">
      {renderSidebarMenu()}
      <div className="w-3/4 py-8 px-12">{renderStep()}</div>
    </div>
  );
};

export default Form;
