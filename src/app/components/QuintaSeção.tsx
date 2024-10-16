import React from "react";

export const QuintaSeção = () => {
  return (
    <div id="quinta"
      className="bg-gray-100 p-4 h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/imageQuinta.jpg')" }}
    >
      <div className="absolute inset-0 overflow-hidden"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 p-8 flex flex-col gap-5 items-center bg-white rounded-2xl shadow-lg w-11/12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:right-32 lg:transform lg:translate-x-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-extrabold text-center w-80">
          Dicas de bem-estar
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-black text-center">
          Fale sobre as características mais importantes deste produto ou
          serviço. Destacar as mais populares funciona também! Fale sobre as
          características mais importantes deste produto ou serviço.
        </p>
        <button className="bg-pink-500 hover:bg-pink-700 text-white  font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full">
          Saiba Mais
        </button>
        f
      </div>
    </div>
  );
};
