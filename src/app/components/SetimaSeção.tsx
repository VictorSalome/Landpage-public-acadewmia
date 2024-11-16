"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export const SetimaSeção = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Formulário enviado com sucesso!");
  };

  return (
    <section
      id="setima"
      className="p-4 sm:p-8 min-h-screen bg-[#080911] flex flex-col justify-center items-center"
    >
      <Toaster />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[95%] sm:max-w-md p-4 sm:p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6"
        >
          Entre em Contato
        </motion.h2>
        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 sm:space-y-6" 
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-3 block w-full text-black rounded-md border border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 text-base transition-all duration-300"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-3 block w-full text-black rounded-md border border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 text-base transition-all duration-300"
              placeholder="Seu email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 text-black text-base transition-all duration-300"
              placeholder="Sua mensagem"
            ></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-lg text-base sm:text-lg"
            >
              Enviar
            </button>
          </motion.div>
        </motion.form>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <p className="text-gray-800 mb-4 font-medium text-sm sm:text-base">
            Ou entre em contato pelas redes sociais:
          </p>
          <div className="flex justify-center space-x-8 sm:space-x-10">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/5511987319331?text=Olá, tenho interesse em adquirir o plano e consultas de bem estar."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 text-3xl sm:text-4xl transition-colors duration-300"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/victorsalome/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-3xl sm:text-4xl transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 text-3xl sm:text-4xl transition-colors duration-300"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
