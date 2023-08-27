import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

export const metadata = {
  title: "Login",
  description: "Entre em sua conta",
};

export default function Login() {
  return (
    <div className="h-[74%] w-[50%] rounded-[15px] bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex">
      <div className="bg-black h-full w-[500px] flex justify-center items-center rounded-tl-[15px] rounded-bl-[15px] ">
        <Image src={logo} />
      </div>

      <div className="h-full flex flex-col justify-around ml-16">
        <h1 className="text-3xl font-semibold ">Acesse sua conta</h1>
        <form className="flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
          <label htmlFor="senha">Senha</label>
          <input type="text" id="senha" className="bg-transparent p-2 border-b-2 focus:outline-none"/>
          <Link className="text-[0.7rem] font-bold " href="/">Esqueci a senha</Link>
          <Link href='/home' className="px-6 py-3 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-2xl rounded-full flex justify-center items-center">
            Continuar
          </Link>
        </form>

        <Link href="/create">Não tenho uma conta</Link>
      </div>
    </div>
  );
}
