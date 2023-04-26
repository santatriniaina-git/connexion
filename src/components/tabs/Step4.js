import React from "react";
import BigDisclosure from "../disclosure/BigDisclosure";
import ButtonConnexion from "../ButtonConnexion";

function Step4({ nextStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-row-2 gap-x-20 gap-y-11"
    >
      <label htmlFor="name">VOS BESOINS</label>
      <div className="flex flex-col space-y-6">
        <BigDisclosure
          title={"Gestion des ressources humaines"}
          classParent=" bg-white my-[0.5rem] px-[1rem] py-[0.5rem] h-[4.313rem] w-[61.25rem]"
        >
          <p className="h-full">text1</p>
        </BigDisclosure>
        <BigDisclosure
          title={"Recrutement et site carriere"}
          classParent=" bg-white my-2 px-4 py-2 h-28"
        >
          <p className="h-full">text2</p>
        </BigDisclosure>
      </div>
      <div className="grid grid-cols-2 gap-x-20 gap-y-11">
          <div>
          <label htmlFor="field1">Code parteneaire (facultatif)</label>
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
          <label htmlFor="field2">Avez vous déjà un logiciel RH?</label>
          <input
            type="text"
            placeholder="Non"
            id="field2"
            name="field2"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        </div>
        
      <ButtonConnexion width="w-[441px]" />
    </form>
  );
}

export default Step4;
