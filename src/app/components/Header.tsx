"use client";

import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false); // Fecha o menu ao clicar em um item
  };

  return (
    <nav className="bg-[#935B47] p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-end md:justify-center m:items-center gap-6">
        <ul className="hidden md:flex justify-center gap-8">
          <li>
            <a
              href="#primeira"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#segunda"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#terceira"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Principais recursos
            </a>
          </li>
          <li>
            <a
              href="#quarta"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Exercícios
            </a>
          </li>
          <li>
            <a
              href="#sexta"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Depoimentos
            </a>
          </li>
          <li>
            <a
              href="#setima"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Contato
            </a>
          </li>
        </ul>
        {/* Botão do menu hambúrguer para telas móveis */}
        <div className="flex justify-between items-center gap-14 md:hidden list-none">
          <li>
            <a
              href="#primeira"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#segunda"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#terceira"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Principais recursos
            </a>
          </li>
        </div>{" "}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu de navegação para telas pequenas (mobile) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4">
          <li>
            <a
              href="#quarta"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Exercícios
            </a>
          </li>
          <li>
            <a
              href="#sexta"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Depoimentos
            </a>
          </li>
          <li>
            <a
              href="#setima"
              className="hover:text-blue-600 text-black"
              onClick={handleMenuClick}
            >
              Contato
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};
