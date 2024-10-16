import Image from "next/image";
import { MdOutlineSportsBasketball } from "react-icons/md";

export const PrimeiraSeção = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-48 p-20 bg-[#080911] min-h-screen md:">
      <div className="flex flex-col w-full sm:w-1/3 gap-10 order-2 sm:order-1 sm:self-center md:self-start md:gap-14">
        <div className="flex items-center gap-3 ">
          <MdOutlineSportsBasketball className="text-2xl text-red-500 " />
          <h3 className="text-2xl tracking-widest text-white">VIVA A VIDA</h3>
        </div>
        <h1 className="text-4xl sm:text-7xl leading-tight text-white w-96">
          A vida precisa de movimento
        </h1>
        <p className="text-lg sm:text-2xl text-white md:mt-10">
          Faça do movimento uma parte da sua vida com exercícios curtos e fáceis
        </p>
        <div className="mt-32 md:mt-0">
          <button className="rounded-full bg-red-500 px-4 py-2 w-full sm:w-64 h-14 tracking-widest font-bold text-lg text-white hover:bg-red-600 transition duration-300">
            SAIBA MAIS
          </button>
        </div>
      </div>

      <div className="hidden lg:block relative md:left-32 w-full sm:w-2/3 h-60 sm:h-[35rem] overflow-hidden rounded-2xl order-1 sm:order-2 md:w-[50rem]">
        <Image
          src="/imagePrincipal.jpg"
          alt="Imagem Principal"
          layout="responsive"
          className="absolute top-0 object-cover max-w-full max-h-full"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
