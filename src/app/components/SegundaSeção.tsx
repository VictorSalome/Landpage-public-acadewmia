export const SegundaSeção = () => {
  return (
    <div id="segunda"
      className="relative bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-col gap-10 justify-center items-center p-4"
      style={{ backgroundImage: "url('/imageSegundari.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 w-full sm:w-3/4 md:w-1/2 flex flex-col gap-5 justify-center items-center text-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl text-white w-80 font-extrabold">
          Sobre a Viva a Vida
        </h1>
        <p className="text-lg font-semibold md:font-medium sm:text-lg md:text-2xl text-white ">
          A Viva a Vida é uma iniciativa que busca inspirar as pessoas a
          adotarem um estilo de vida mais saudável e equilibrado. Nossa proposta
          é promover a prática de exercícios físicos de forma regular e
          consciente. Acreditamos que a vida precisa de movimento para ser plena
          e feliz. Nossa missão é espalhar a mensagem da importância da
          atividade física para a saúde e bem-estar. Venha fazer parte dessa
          jornada e comece a viver melhor!
        </p>
      </div>
    </div>
  );
};
