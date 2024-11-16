"use client";

import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

export const QuartaSeção = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/imageQuarta.jpg"
      bgImageAlt="Background"
      strength={200}
    >
      <section id="quarta"
        className="min-h-screen relative bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center w-full max-w-4xl px-4 sm:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight"
          >
            Treinos e exercícios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed"
          >
            Descubra uma nova forma de treinar com nossos programas personalizados.
            Oferecemos exercícios adaptados para todos os níveis, desde iniciantes
            até atletas avançados. Nossa metodologia única combina treinos
            funcionais, cardiovasculares e de força para maximizar seus resultados.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mt-4 sm:mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-lg transition-colors duration-300 text-sm sm:text-base"
          >
            SAIBA MAIS
          </motion.button>
        </div>
      </section>
    </Parallax>
  );
};
