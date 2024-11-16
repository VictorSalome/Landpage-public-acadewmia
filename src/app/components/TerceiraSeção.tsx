"use client";

import { FaDumbbell, FaRunning, FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";

export const TerceiraSeção = () => {
  return (
    <div id="terceira" className="min-h-screen bg-[#080911] flex flex-col justify-center items-center p-4 sm:p-8">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-2xl sm:text-3xl md:text-4xl mb-12 sm:mb-20 font-extrabold text-center px-4"
      >
        Recursos Exclusivos
      </motion.h2>
      <div className="flex flex-col md:flex-row md:justify-around items-center gap-8 sm:gap-12 md:gap-16 w-full max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center w-full md:w-1/3 px-4"
        >
          <div className="bg-black rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 mb-4 sm:mb-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg">
            <FaDumbbell className="text-white text-4xl sm:text-5xl md:text-9xl" />
          </div>
          <p className="text-white mt-2 sm:mt-4 border border-gray-700 rounded-3xl w-full max-w-xs p-4 sm:p-5 font-semibold hover:bg-neutral-900/50 transition-colors duration-300 text-sm sm:text-base">
            Treinos personalizados adaptados ao seu nível e objetivos, com acompanhamento profissional para maximizar seus resultados.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center w-full md:w-1/3 px-4"
        >
          <div className="bg-black rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 mb-4 sm:mb-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg">
            <FaRunning className="text-white text-4xl sm:text-5xl md:text-9xl" />
          </div>
          <p className="text-white mt-2 sm:mt-4 border border-gray-700 rounded-3xl w-full max-w-xs p-4 sm:p-5 font-semibold hover:bg-neutral-900/50 transition-colors duration-300 text-sm sm:text-base">
            Programas de corrida e cardio com monitoramento em tempo real do seu progresso e desempenho físico.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center text-center w-full md:w-1/3 px-4"
        >
          <div className="bg-black rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 mb-4 sm:mb-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg">
            <FaHeartbeat className="text-white text-4xl sm:text-5xl md:text-9xl" />
          </div>
          <p className="text-white mt-2 sm:mt-4 border border-gray-700 rounded-3xl w-full max-w-xs p-4 sm:p-5 font-semibold hover:bg-neutral-900/50 transition-colors duration-300 text-sm sm:text-base">
            Monitoramento completo da sua saúde, incluindo frequência cardíaca, calorias queimadas e níveis de atividade diária.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
