import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Seta from "../../../../public/iconContinuar.png";

export const metadata = {
  title: "Redefina sua senha",
  description: "Entre em sua conta",
};

export default function Repass1() {
  return (
    <div className='text-white w-screen h-screen flex justify-center items-center flex-col'>
      <div className="h-[74%] w-[70vw] rounded-[15px] bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex">
        <div className="bg-[#613DC1] h-full w-[70%] flex justify-center items-center rounded-tl-[15px] rounded-bl-[15px] ">
          <Image src={logo}  className="max-w-[150px]"/>
        </div>
        <div className="h-full w-full flex flex-col pt-20 gap-20 pl-20 items-start">
          <h1 className="text-2xl font-medium ">Redefina sua senha</h1>
          <form className="flex flex-col gap-6 w-1/2">
            <label htmlFor="email">Nova senha</label>
            <input type="text" id="email" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
            <label htmlFor="senha">Confirmar Nova Senha</label>
            <input type="password" id="senha" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
            <Link href='/home' className=" flex justify-center items-center gap-8 text-xl px-5 py-5 mt-2 bg-[#7258B9] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-2xl rounded-full">
              Redefinir senha
              <Image src={Seta} width={20} alt='seta'/>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
