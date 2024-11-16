"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

export const SegundaSeção = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/imageSegundari.jpg"
      bgImageAlt="Background"
      strength={200}
    >
      <section id="segunda"
        className="relative min-h-screen w-full flex flex-col gap-8 sm:gap-10 justify-center items-center p-4 sm:p-8 bg-neutral-900/70 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col gap-4 sm:gap-5 justify-center items-center text-center px-4 sm:px-0"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight"
          >
            Sobre a Viva a Vida
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed max-w-prose"
          >
            A Viva a Vida é uma iniciativa que busca inspirar as pessoas a
            adotarem um estilo de vida mais saudável e equilibrado. Nossa proposta
            é promover a prática de exercícios físicos de forma regular e
            consciente. Acreditamos que a vida precisa de movimento para ser plena
            e feliz. Nossa missão é espalhar a mensagem da importância da
            atividade física para a saúde e bem-estar. Venha fazer parte dessa
            jornada e comece a viver melhor!
          </motion.p>
        </motion.div>
      </section>
    </Parallax>
  );
};
