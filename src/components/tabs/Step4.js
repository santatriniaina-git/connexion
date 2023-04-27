import React from "react";
import BigDisclosure from "../disclosure/BigDisclosure";
import ButtonConnexion from "../ButtonConnexion";

const labels = [
  "Espace personnel",
  "Dossiers employés",
  "Suivi des heures et pointages",
  "Communication interne",
  "Statistiques et analytiques RH",
  "Gestion des heures et des payes",
  "Documentation",
  "Remboursements",
  "Gestions des compétences",
  "Organigramme",
  "Iventaire du matériel",
  "Suivie de la performance",
  "Flux des employés et intégration",
  "Horaires de travail et vacances"
];

function NumberedLabels() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {labels.map((label, index) => (
        <div key={index} className="box-border flex flex-row items-center p-15 gap-10 w-[20rem] h-[3.375rem] bg-gray-100 border border-gray-500 rounded-md mt-3 relative">
            <div className="flex items-center space-x-4 ">
            <span>
              x
            </span>
          <span className="font-medium text-sm leading-6 text-primary flex-none order-0 flex-grow font-poppins">{label}</span>
            </div>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
       y
      </span>
          </div>

      ))}
    </div>
  );
}

function Step4({ nextStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-row-2 gap-x-20 gap-y-11 items-center">
      <div className="flex text-[3.75rem] font-bebas font-normal items-center" >VOS BESOINS</div>
      <div className="flex flex-col space-y-6 ">
        <BigDisclosure
          title="Gestion des ressources humaines"
          classParent="bg-white my-2 px-2 py-2 h-auto"
        >
          <NumberedLabels />
        </BigDisclosure>
        <BigDisclosure
          title="Recrutement et site carrière"
          classParent="bg-white my-2 px-2 py-2 h-26"
        >
          <p className="h-full">text2</p>
        </BigDisclosure>
      </div>
      <div className="grid grid-cols-2 gap-x-20 gap-y-11">
        <div>
          <label htmlFor="field1">Code partenaire (facultatif)</label>
          <input
            type="text"
            placeholder="1&0%U4YW!nZs"
            id="field1"
            name="field1"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="field2">Avez-vous déjà un logiciel RH ?</label>
          <input
            type="text"
            placeholder="Non"
            id="field2"
            name="field2"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <label htmlFor="terms-conditions">
              <input
                type="checkbox"
                id="terms-conditions"
                className="mr-2"
                required
              />
              J'accepte les conditions spécifiques d'utilisation de mon compte entreprise
            </label>
          </div>
        </div>
      </div>
      <ButtonConnexion width="w-[441px]" />
    </form>
  );
}

export default Step4;
