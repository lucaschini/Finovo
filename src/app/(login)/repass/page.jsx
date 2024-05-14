import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Seta from "../../../../public/iconContinuar.png";

export const metadata = {
  title: "Insira o código",
  description: "Entre em sua conta",
};

export default function Repass() {
  return (
    <>
      <h1 className="text-2xl font-medium text-center">Redefina sua senha</h1>
      <form className="flex flex-col gap-3 px-5 items-center text-center">
        <label htmlFor="email">
          Insira o codigo enviado para (11) 96***-**60
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            id="email"
            className="bg-transparent p-2 border-b-2 focus:outline-none w-8"
          />
          <input
            type="text"
            id="email"
            className="bg-transparent p-2 border-b-2 focus:outline-none w-8"
          />
          <input
            type="text"
            id="email"
            className="bg-transparent p-2 border-b-2 focus:outline-none w-8"
          />
          <input
            type="text"
            id="email"
            className="bg-transparent p-2 border-b-2 focus:outline-none w-8"
          />
          <input
            type="text"
            id="email"
            className="bg-transparent p-2 border-b-2 focus:outline-none w-8"
          />
        </div>

        <Link
          href="/repass1"
          className=" flex justify-center items-center gap-8 text-xl px-5 py-5 mt-8 bg-mainPurple bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-2xl rounded-full w-64"
        >
          Validar código
          <Image src={Seta} width={20} alt="seta"/>
        </Link>
      </form>
    </>
  );
}
