import Link from "next/link";
import Image from "next/image";
import Seta from "../../../../public/seta.svg";
import logo from "../../../../public/logo.svg";

export const metadata = {
  title: "Bem vindo!",
  description: "Crie sua conta",
};

export default function Create() {
  return (
    <>
      <h1 className="text-2xl font-semibold ">Crie sua conta</h1>
      <form className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="bg-transparent p-2 border-b-2 focus:outline-none"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="bg-transparent p-2 border-b-2 focus:outline-none"
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="text"
            id="senha"
            className="bg-transparent p-2 border-b-2 focus:outline-none"
          />
        </div>
        <Link
          href="/home"
          className="flex justify-center items-center gap-8 text-xl px-5 py-5 mt-2 bg-mainPurple bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-2xl rounded-full w-64"
        >
          Cadastre-se <Image src={Seta} width={20} alt='seta'/>
        </Link>
      </form>
      <Link href="/" className=" hover:text-violet-500">
        Já possuo uma conta
      </Link>
    </>
  );
}
