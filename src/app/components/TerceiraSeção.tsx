import { FaDumbbell, FaRunning, FaHeartbeat } from "react-icons/fa";

export const TerceiraSeção = () => {
  return (
    <div id="terceira" className="min-h-screen bg-[#080911] flex flex-col justify-center items-center p-4">
      <h2 className="text-white text-3xl sm:text-4xl mb-20 font-extrabold">
        Principais recursos
      </h2>
      <div className="flex flex-col md:flex-row md:justify-around items-center gap-12 md:gap-16">
        <div className="flex flex-col items-center text-center mb-8 md:mb-0">
          <div className="bg-black rounded-full w-40 h-40 sm:w-60 sm:h-60 mb-6 flex items-center justify-center">
            <FaDumbbell className="text-white text-5xl sm:text-9xl" />
          </div>
          <p className="text-white mt-4 border border-gray-700 rounded-3xl w-64 p-5 font-semibold">
            Escreva uma característica essencial do aplicativo que está sendo
            anunciado.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mb-8 md:mb-0">
          <div className="bg-black rounded-full w-40 h-40 sm:w-60 sm:h-60 mb-6 flex items-center justify-center">
            <FaRunning className="text-white text-5xl sm:text-9xl" />
          </div>
          <p className="text-white mt-4 border border-gray-700 rounded-3xl w-64 p-5 font-semibold">
            Escreva uma característica essencial do aplicativo que está sendo
            anunciado.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mb-8 md:mb-0">
          <div className="bg-black rounded-full w-40 h-40 sm:w-60 sm:h-60 mb-6 flex items-center justify-center">
            <FaHeartbeat className="text-white text-5xl sm:text-9xl" />
          </div>
          <p className="text-white mt-4 border border-gray-700 rounded-3xl w-64 p-5 font-semibold">
            Escreva uma característica essencial do aplicativo que está sendo
            anunciado.
          </p>
        </div>
      </div>
    </div>
  );
};
