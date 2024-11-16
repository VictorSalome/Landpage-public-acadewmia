"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleMenuClick = () => setIsOpen(false);

  const menuItems = [
    { href: "#primeira", label: "Início" },
    { href: "#segunda", label: "Sobre" },
    { href: "#terceira", label: "Recursos" },
    { href: "#quarta", label: "Serviços" },
    { href: "#sexta", label: "Avaliações" },
    { href: "#setima", label: "Contato" }
  ];

  const MenuItem = ({ href, label }: { href: string; label: string }) => (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        className="text-neutral-100 hover:text-pink-400 transition-colors duration-300 text-lg font-medium"
        onClick={handleMenuClick}
      >
        {label}
      </a>
    </motion.li>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/95 backdrop-blur-sm p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <MenuItem key={item.href} {...item} />
            ))}
          </ul>

          {/* Mobile Menu - Logo/Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:hidden text-2xl font-bold text-white"
          >
            Viva a Vida
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu - Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.ul 
                className="flex flex-col items-center gap-6 py-6"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {menuItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <MenuItem {...item} />
                  </motion.div>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
