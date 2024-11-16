import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const socialLinks = [
    {
      href: "https://wa.me/+5511987319331?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20landinpage",
      icon: <FaWhatsapp />,
      className: "text-gray-300 hover:text-white"
    },
    {
      href: "https://www.linkedin.com/in/victorsalome/",
      icon: <FaLinkedin />,
      className: "text-gray-300 hover:text-white"
    },
    {
      href: "https://www.instagram.com/victorsalome41/",
      icon: <FaInstagram />,
      className: "text-gray-300 hover:text-white"
    }
  ];

  const contactInfo = [
    { label: "Contato", value: "(11) 98731-9331" },
    { label: "Email", value: "victorsalome41@hotmail.com" },
    {
      label: "GitHub",
      value: "VictorSalome",
      href: "https://github.com/VictorSalome",
      className: "text-gray-300 hover:text-white"
    },
    {
      label: "LinkedIn",
      value: "Victor Salome",
      href: "https://www.linkedin.com/in/victorsalome/",
      className: "text-gray-300 hover:text-white"
    }
  ];

  return (
    <footer className="bg-neutral-900 text-gray-300 py-8 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h4 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Victor Salome</h4>
          <p className="text-sm sm:text-base opacity-90">
            © {new Date().getFullYear()} Todos os direitos reservados a Victor Salome.
          </p>
        </div>

        <div className="flex justify-center space-x-8 sm:space-x-10">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.className} text-2xl sm:text-3xl transition-colors duration-300 hover:scale-110 transform`}
              aria-label={`Social media link ${index + 1}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-center space-y-3">
          {contactInfo.map((info, index) => (
            <p key={index} className="text-sm sm:text-base">
              <span className="font-semibold">{info.label}:</span>{" "}
              {info.href ? (
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${info.className} hover:underline transition-all duration-300`}
                >
                  {info.value}
                </a>
              ) : (
                <span className="opacity-90">{info.value}</span>
              )}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};
