import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import SidebarMenu from "../SidebarMenu";

function Form() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const steps = [
        { name: "Notre fonctionnement", component: Step1 },
        { name: "Création du profile d'entreprise", component: Step2 },
        { name: "Création du premier administrateur", component: Step3 },
        { name: "Vos besoins", component: Step4 },
        { name: "", component: Step5 },
    ];

    const renderStep = () => {
        const StepComponent = steps[currentStep - 1].component;
        return <StepComponent nextStep={nextStep} />;
    };

    return (
        <div className="flex flex-row mx-auto">
            <SidebarMenu steps={steps} currentStep={currentStep} />
            <div className="w-3/4 py-8 px-12 bg-[#fff]">{renderStep()}</div>
        </div>
    );
};

export default Form;
