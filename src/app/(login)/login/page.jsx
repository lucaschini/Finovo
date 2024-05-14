import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Seta from "../../../../public/seta.svg";

export const metadata = {
  title: "Login",
  description: "Entre em sua conta",
};

export default function Login() {
  return (
  <>
          <h1 className="text-2xl font-medium ">Acesse sua conta</h1>
          <form className="flex flex-col gap-8 sm:gap-3">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
            <Link className="text-xs hover:text-violet-500" href="/repass">Esqueci a senha</Link>
            <Link href='/home' className=" flex justify-center items-center gap-8 text-xl px-5 py-5 mt-2 bg-mainPurple bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-2xl rounded-full">
              Continuar
              <Image src={Seta} width={20} alt='seta'/>
            </Link>
          </form>
          <Link href="/create" className="pb-8 sm:pb-0 hover:text-violet-500">Não tenho uma conta</Link>
          </>
  );
}
