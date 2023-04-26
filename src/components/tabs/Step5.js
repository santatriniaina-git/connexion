import React from "react";
import ButtonConnexion from "../ButtonConnexion";

function Step5() {
  return (
    <form>
      <div className="font-poppins font-normal flex items-center justify-center flex-col">
        <div className="stepConfirmation">
          <svg width="80px" height="80px" viewBox="0 0 133 133" version="1.1">
            <g
              id="check-group"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <circle
                id="filled-circle"
                fill="#73C7B7"
                cx="66.5"
                cy="66.5"
                r="54.5"
              ></circle>
              <circle
                id="white-circle"
                fill="#FFFFFF"
                cx="66.5"
                cy="66.5"
                r="55.5"
              ></circle>
              <circle
                id="outline"
                stroke="#73C7B7"
                stroke-width="4"
                cx="66.5"
                cy="66.5"
                r="54.5"
              ></circle>
              <polyline
                id="check"
                stroke="#FFFFFF"
                stroke-width="4"
                points="41 70 56 85 92 49"
              ></polyline>
            </g>
          </svg>
        </div>
        <div className="text-center text-base leading-[30px]">
          Merci d'avoir procédé à l'inscription de votre entreprise.
        </div>
        <div className="text-center text-base leading-[30px] mb-4">
          Altee est utilisable immédiatement
        </div>
        <ButtonConnexion width="w-[24.125rem] mb-4" />
        <div className="text-center text-gray-500 text-[14px] leading-[23px] justify-center ">
          Note: Vous avez recu un courriel confirmant votre inscription
        </div>
        <div className="text-center text-gray-500 text-[14px] mb-4">
          donc pensez à verifier vos SPAM.
        </div>
      </div>
    </form>
  );
}

export default Step5;
