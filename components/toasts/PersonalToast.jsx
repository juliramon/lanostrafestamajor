import React, { useEffect } from "react";

const PersonalToast = () => {
  useEffect(() => {
    const personalToast = document.getElementById("personalToastWrapper");
    personalToast.classList.add("active");
  });
  return (
    <div id="personalToastWrapper" className="z-50">
      <div
        id="personalToast"
        className="mx-auto p-4 bg-white relative shadow-md"
      >
        <div
          id="toastBlopWrapper"
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
        >
          <span id="toastBlop" className="w-3 h-3 bg-red-500 block"></span>
        </div>
        <p className="text-sm font-fonseca text-primary-400">
          Hola
          <span className=" text-primary-500 underline hidden"></span>, tot i
          que pròximament rebreu les invitacions per a la nostra gran festa,
          només ens voliem assegurar que us reserveu el dia{" "}
          <a
            href="https://calendar.google.com/event?action=TEMPLATE&tmeid=Nmczamc1cTZmdGJvb2hvcGUyMDAydW1qa2QganVsaWRlcmFtb25AbQ&tmsrc=julideramon%40gmail.com"
            title="Afegir l'esdeveniment al calendari"
            target="_blank"
            className="text-primary-500 underline"
          >
            01.04.2023
          </a>{" "}
          al calendari. Aneu-vos preparant! 🎉
        </p>
      </div>
    </div>
  );
};

export default PersonalToast;
