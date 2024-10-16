"use client";
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

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
      className="p-8 h-screen flex flex-col justify-center items-center"
    >
      <Toaster />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Entre em Contato
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full text-black rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full text-black rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Seu email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black sm:text-sm"
              placeholder="Sua mensagem"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-800 mb-4">
            Ou entre em contato pelas redes sociais:
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/5511987319331?text=Olá, tenho interesse em adquirir o plano e consultas de bem estar."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 text-3xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/victorsalome/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 text-3xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
