export const SextaSeção = () => {
  const Depoimentos = [
    {
      nome: "Francine, Assistente Virtual",
      texto:
        "Depoimentos: frases curtas das pessoas que gostam da sua marca. É uma ótima forma de convencer o público a experimentar seus serviços.",
    },
    {
      nome: "David, Analista de Negócios",
      texto:
        "Depoimentos: frases curtas das pessoas que gostam da sua marca. É uma ótima forma de convencer o público a experimentar seus serviços.",
    },
    {
      nome: "Maria, Gerente de Marketing",
      texto:
        "Depoimentos: frases curtas das pessoas que gostam da sua marca. É uma ótima forma de convencer o público a experimentar seus serviços.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#080911] flex flex-col justify-center items-center p-4">
      <h2 className="text-white text-3xl sm:text-4xl mb-20 font-extrabold">
        Depoimentos
      </h2>
      <div className="flex flex-col md:flex-row md:justify-around items-center gap-12 md:gap-16">
        {Depoimentos.map(({ nome, texto }) => (
          <div
            key={nome}
            className="flex flex-col items-center text-center mb-8 md:mb-0 bg-white rounded-xl w-72 p-6 "
          >
            <p className="text-stone-700 text-lg font-semibold mb-4">{texto}</p>
            <p className="text-[#080911] font-semibold ">{nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
