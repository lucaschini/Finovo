import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";

export const metadata = {
  title: "Bem vindo!",
  description: "Crie sua conta",
};

export default function Create() {
  return (
    <div className='text-white w-screen h-screen flex justify-center items-center flex-col'>
      <div className="h-[74%] w-[70vw] rounded-[15px] bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex">
        <div className="bg-black h-full w-[70%] flex justify-center items-center rounded-tl-[15px] rounded-bl-[15px] ">
          <Image src={logo} className="max-w-[150px]"/>
        </div>
        <div className="h-full w-full flex flex-col justify-around items-center">
          <h1 className="text-2xl font-semibold ">Crie sua conta</h1>
          <form className="flex flex-col gap-5 w-1/2">
          <div className="flex flex-col gap-2">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
              <label htmlFor="senha">Senha</label>
              <input type="text" id="senha" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
          </div>
            <Link href='/home' className="text-xl px-3 py-2 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-2xl rounded-full flex justify-center items-center">
              Cadastre-se
            </Link>
          </form>
          <Link href="/" className=" hover:text-violet-500">Já possuo uma conta</Link>
        </div>
      </div>
    </div>
  );
}
