import React, { useState } from "react";
import StepOurProcess from "./Step1";
import StepCreateCompanyProfile from "./Step2";
import StepCreateFirstAdmin from "./Step3";
import StepYourNeeds from "./Step4";
import StepConfirmation from "./Step5";
import SidebarMenu from "../SidebarMenu";
import Header from "../Header";
import Footer from "../Footer";

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
      <div className="py-24">
        <StepComponent nextStep={nextStep} />
      </div>
    );
    
  };

  return (
    <div className="relative">
      <Header />
      <div className="flex flex-row mx-auto">
        <div className="w-1/4 bg-[#F9F9F9] h-screen">
          <SidebarMenu steps={steps} currentStep={currentStep} />
        </div>
        <div className="w-3/4 py-8 flex items-center justify-center bg-[#fff]">{renderStep()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
