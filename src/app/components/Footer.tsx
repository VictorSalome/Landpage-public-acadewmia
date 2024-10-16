import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#935B47] text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-xl font-bold">Victor Salome</h4>
          <p className="text-sm">
            © 2023 Todos os direitos reservados a Victor Salome.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-4 md:mb-0">
          <a
            href="https://wa.me/+5511987319331?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20landinpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 text-2xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/victorsalome/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/victorsalome41/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">Contato: (11) 98731-9331</p>
          <p className="text-sm">Email: victorsalome41@hotmail.com</p>
          <p className="text-sm">
            GitHub:{" "}
            <a
              href="https://github.com/VictorSalome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              VictorSalome
            </a>
          </p>
          <p className="text-sm">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/victorsalome/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Victor Salome
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
