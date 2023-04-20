import React from "react";
import ButtonConnexion from "../ButtonConnexion";

function Step2({ nextStep }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="field1">Field 1</label>
        <input
          type="text"
          id="field1"
          name="field1"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field2">Field 2</label>
        <input
          type="text"
          id="field2"
          name="field2"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field3">Field 3</label>
        <input
          type="text"
          id="field3"
          name="field3"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field4">Field 4</label>
        <input
          type="text"
          id="field4"
          name="field4"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field5">Field 5</label>
        <input
          type="text"
          id="field5"
          name="field5"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field6">Field 6</label>
        <input
          type="text"
          id="field6"
          name="field6"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field7">Field 7</label>
        <input
          type="text"
          id="field7"
          name="field7"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="field8">Field 8</label>
        <input
          type="text"
          id="field8"
          name="field8"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <ButtonConnexion />
    </form>
  );
}

export default Step2;
