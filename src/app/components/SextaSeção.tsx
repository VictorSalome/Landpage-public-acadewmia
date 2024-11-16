"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

export const SextaSeção = () => {
  const Depoimentos = [
    {
      nome: "Francine, Assistente Virtual",
      texto:
        "A Viva a Vida transformou minha rotina! Os treinos personalizados e o acompanhamento profissional me ajudaram a alcançar resultados que nunca imaginei.",
    },
    {
      nome: "David, Analista de Negócios", 
      texto:
        "Incrível como os programas se adaptam ao meu dia corrido. Em poucos meses, notei uma melhora significativa na minha disposição e qualidade de vida.",
    },
    {
      nome: "Maria, Gerente de Marketing",
      texto:
        "O diferencial da Viva a Vida está no cuidado com cada aluno. Os profissionais são atenciosos e os treinos são desafiadores na medida certa.",
    },
  ];

  return (
    <Parallax
      blur={0}
      bgImage="/imageSexta.jpg"
      bgImageAlt="Background"
      strength={200}
    >
      <section id="sexta" className="min-h-screen relative bg-neutral-900/70 backdrop-blur-sm flex flex-col justify-center items-center p-4 sm:p-8">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 sm:mb-16 md:mb-20 font-extrabold text-center px-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Depoimentos
        </motion.h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 w-full max-w-7xl px-4">
          {Depoimentos.map(({ nome, texto }, index) => (
            <motion.div
              key={nome}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center text-center w-full sm:w-[85%] md:w-[45%] lg:w-[30%] bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-stone-800 text-base sm:text-lg md:text-xl font-medium mb-4 sm:mb-6"
              >
                {texto}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                whileHover={{ scale: 1.05, color: "#ff69b4" }}
                className="text-[#080911] font-bold text-base sm:text-lg"
              >
                {nome}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </Parallax>
  );
};
