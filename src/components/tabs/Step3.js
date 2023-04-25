import React from "react";
import ButtonConnexion from "../ButtonConnexion";

function Step3({ nextStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-20 gap-y-11">
      <div>
        <label htmlFor="field1">Prénom *</label>
        <input
          type="text"
          placeholder="Prénom"
          id="field1"
          name="field1"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field2">Nom *</label>
        <input
          type="text"
          placeholder="Nom"
          id="field2"
          name="field2"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field3">Courriel de correspondance *</label>
        <input
          type="text"
          placeholder="Courriel"
          id="field3"
          name="field3"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field4">Téléphone professionnel</label>
        <input
          type="text"
          placeholder="Téléphone"
          id="field4"
          name="field4"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field5">Mot de passe *</label>
        <input
          type="text"
          placeholder="Mot de passe"
          id="field5"
          name="field5"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field6">Confirmer mot de passe </label>
        <input
          type="text"
          placeholder="1&0%U4YW!nZs"
          id="field6"
          name="field6"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field7">Langue de préférence *</label>
        <input
          type="text"
          placeholder="Française"
          id="field7"
          name="field7"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="col-span-2">
      <ButtonConnexion width="w-[441px]" />
      </div>
    </form>
  );
}

export default Step3;
