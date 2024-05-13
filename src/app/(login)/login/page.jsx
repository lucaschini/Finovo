import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Seta from "../../../../public/iconContinuar.png";

export const metadata = {
  title: "Login",
  description: "Entre em sua conta",
};

export default function Login() {
  return (
    <div className='text-white w-screen h-screen flex justify-center items-center flex-col'>
      <div className=" h-screen w-screen sm:h-[74%] sm:w-[70vw] rounded-[15px] bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex flex-col sm:flex-row">
        <div className="bg-[#613DC1] max-h-56 sm:max-h-full sm:w-[70%] flex justify-center items-center rounded-t-[15px] sm:rounded-tl-[15px] sm:rounded-bl-[15px] ">
          <Image src={logo}  className="max-w-[100px] m-4 sm:max-w-[150px]"/>
        </div>
        <div className="h-full w-full flex flex-col pt-10 sm:pt-20 gap-20 sm:pl-20 items-center sm:items-start">
          <h1 className="text-2xl font-medium ">Acesse sua conta</h1>
          <form className="flex flex-col gap-8 sm:gap-3">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
            <Link className="text-xs hover:text-violet-500" href="/repass">Esqueci a senha</Link>
            <Link href='/home' className=" flex justify-center items-center gap-8 text-xl px-5 py-5 mt-2 bg-[#7258B9] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-2xl rounded-full">
              Continuar
              <Image src={Seta} width={20} alt='seta'/>
            </Link>
          </form>
          <Link href="/create" className="pb-8 sm:pb-0 hover:text-violet-500">Não tenho uma conta</Link>
        </div>
      </div>
    </div>
  );
}
