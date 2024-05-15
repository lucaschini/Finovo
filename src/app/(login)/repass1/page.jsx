import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Seta from "../../../../public/seta.svg";

export const metadata = {
  title: "Redefina sua senha",
  description: "Entre em sua conta",
};

export default function Repass1() {
  return (
    <>
          <h1 className="text-2xl font-medium ">Redefina sua senha</h1>
          <form className="flex flex-col gap-6 ">
            <label htmlFor="email" className="text-start">Nova senha</label>
            <input type="text" id="email" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
            <label htmlFor="senha">Confirmar Nova Senha</label>
            <input type="password" id="senha" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
            <Link href='/home' className=" flex justify-center items-center gap-8 text-xl px-5 py-5 mt-2 bg-mainPurple bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-2xl rounded-full w-64">
              Redefinir senha
              <Image src={Seta} width={20} alt='seta'/>
            </Link>
          </form>
          </>
  );
}
