"use client";

import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

export const QuintaSeção = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/imageQuinta.jpg"
      bgImageAlt="Background"
      strength={200}
    >
      <section id="quinta"
        className="min-h-screen relative bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 items-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-extrabold text-center leading-tight"
          >
            Dicas de bem-estar
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black text-center leading-relaxed"
          >
            Descubra dicas valiosas para melhorar sua qualidade de vida. 
            Aprenda sobre nutrição, exercícios, saúde mental e muito mais 
            para alcançar um estilo de vida mais equilibrado e saudável.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mt-2 sm:mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg transition-colors duration-300 text-sm sm:text-base"
          >
            Saiba Mais
          </motion.button>
        </motion.div>
      </section>
    </Parallax>
  );
};
