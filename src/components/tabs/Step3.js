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
        <label htmlFor="field1">Nom commercial *</label>
        <input
          type="text"
          id="field1"
          name="field1"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field2">Industrie *</label>
        <input
          type="text"
          id="field2"
          name="field2"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field3">Courriel général de l'entreprise *</label>
        <input
          type="text"
          id="field3"
          name="field3"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field4">Téléphone de l'entreprise *</label>
        <input
          type="text"
          id="field4"
          name="field4"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field5">Adresse *</label>
        <input
          type="text"
          id="field5"
          name="field5"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field6">Adresse Complémentaire </label>
        <input
          type="text"
          id="field6"
          name="field6"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field7">Fuseau horaire *</label>
        <input
          type="text"
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
