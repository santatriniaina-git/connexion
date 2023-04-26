import React, { useState } from "react";
import StepOurProcess from "./Step1";
import StepCreateCompanyProfile from "./Step2";
import StepCreateFirstAdmin from "./Step3";
import StepYourNeeds from "./Step4";
import StepConfirmation from "./Step5";
import SidebarMenu from "../SidebarMenu";

function Form() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const steps = [
    { name: "Notre fonctionnement", component: StepOurProcess },
    { name: "Création du profile d'entreprise", component: StepCreateCompanyProfile },
    { name: "Création du premier administrateur", component: StepCreateFirstAdmin },
    { name: "Vos besoins", component: StepYourNeeds },
    { name: "", component: StepConfirmation },
  ];

  const renderStep = () => {
    const StepComponent = steps[currentStep - 1].component;
    return (
      <div>
        <div className="absolute top-0 right-0 w-[82.5rem] h-16 flex items-center justify-end">
          <h1>HEADER</h1>
        </div>
        <div>
          <StepComponent nextStep={nextStep} />
        </div>
        <div className="absolute bottom-0 right-0 w-[82.5rem] h-16 flex items-center justify-end">
          <h1>FOOTER</h1>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-row mx-auto">
      <div className="hidden lg:block w-[37.5rem] bg-[#F9F9F9] h-screen">
        <SidebarMenu steps={steps} currentStep={currentStep} />
      </div>
      <div className="w-full lg:w-[82.5rem] py-8 flex items-center justify-center bg-[#fff] relative">
        {renderStep()}
      </div>
    </div>
  );
}

export default Form;
