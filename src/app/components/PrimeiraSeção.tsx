"use client";

import Image from "next/image";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

export const PrimeiraSeção = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/imagePrincipal.jpg"
      bgImageAlt="Background"
      strength={200}
    >
      <section
        id="primeira"
        className="flex min-h-[100dvh] flex-col items-center justify-center bg-neutral-900/90 px-4 backdrop-blur-sm sm:min-h-screen sm:flex-row sm:justify-between sm:px-48 lg:px-24 xl:px-48"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col gap-8 text-center px-2 h-[70dvh] justify-center sm:h-auto sm:gap-6 sm:text-left sm:w-1/2 lg:w-2/5"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 justify-center sm:justify-start"
          >
            <MdOutlineSportsBasketball className="text-3xl sm:text-2xl text-neutral-400" />
            <h3 className="text-2xl sm:text-2xl font-semibold tracking-widest text-neutral-200">
              VIVA A VIDA
            </h3>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-neutral-100"
          >
            A vida precisa de movimento
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl sm:text-lg md:text-xl lg:text-2xl text-neutral-300"
          >
            Faça do movimento uma parte da sua vida com exercícios curtos e fáceis
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mx-auto sm:mx-0 mt-8 sm:mt-8 w-full max-w-xs rounded-full bg-neutral-700 px-8 py-5 text-xl font-bold tracking-wider text-neutral-100 transition duration-300 hover:bg-neutral-600"
          >
            SAIBA MAIS
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden rounded-2xl sm:mt-12 lg:mt-0 lg:w-1/2"
        >
          <Image
            src="/imagePrincipal.jpg"
            alt="Pessoa praticando exercícios"
            width={800}
            height={600}
            priority
            className="h-[200px] sm:h-[400px] lg:h-[600px] w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </section>
    </Parallax>
  );
};
