import React from "react";

export const QuartaSeção = () => {
  return (
    <section
      className="bg-gray-100 p-4 h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/imageQuarta.jpg')" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center gap-5">
        <h2 className="text-4xl sm:text-4xl md:text-5xl text-white w-80 font-extrabold ">
          Treinos e exercícios
        </h2>
        <p className="text-lg font-semibold md:font-medium sm:text-lg md:text-2xl text-white ">
          Fale sobre as características mais importantes deste produto ou
          serviço. Destacar as mais populares funciona também! Fale sobre as
          características mais importantes deste produto ou serviço. Destacar as
          mais populares funciona também!
        </p>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full">
          SAIBA MAIS
        </button>
      </div>
    </section>
  );
};
