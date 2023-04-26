import React from "react";
import BigDisclosure from "../disclosure/BigDisclosure";
import ButtonConnexion from "../ButtonConnexion";

function Step4({ nextStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-row-2 gap-x-20 gap-y-11 items-center">
      <div className="flex text-[3.75rem] font-bebas text-[#101828] font-normal items-center " >VOS BESOINS</div>
      <div className="flex flex-col space-y-6 ">
        <BigDisclosure
          title={"Gestion des ressources humaines"}
          classParent=" bg-white my-2 px-2 py-2 h-auto">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p>Étiquette 1</p>
              <p>Étiquette 2</p>
              <p>Étiquette 3</p>
              <p>Étiquette 4</p>
              <p>Étiquette 5</p>
            </div>
            <div>
              <p>Étiquette 6</p>
              <p>Étiquette 7</p>
              <p>Étiquette 8</p>
              <p>Étiquette 9</p>
              <p>Étiquette 10</p>
            </div>
            <div>
              <p>Étiquette 11</p>
              <p>Étiquette 12</p>
              <p>Étiquette 13</p>
              <p>Étiquette 14</p>
            </div>
          </div>
        </BigDisclosure>
        <BigDisclosure
          title={"Recrutement et site carriere"}
          classParent=" bg-white my-2 px-2 py-2 h-26"
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
            id="field1" name="field1"
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
        <div className="flex items-center">
          <div className="flex items-center ">
            <label className=""></label>
          </div>
          <div className="font-poppins font-normal h-[1.063rem] w-[28.313rem] text-[12px] text-[#11142D] ">
            J'accepte les conditions spécifiques d’utilisation de mon compte
            entreprise
          </div>
        </div>
      </div>

      <ButtonConnexion width="w-[441px]" />
    </form>
  );
}

export default Step4;
