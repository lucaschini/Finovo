import npp from '../../../public/npp.jpg'
import logo from '../../../public/logo1.png'
import voltar from '../../../public/voltar.png'

import Image from "next/image";
import Link from 'next/link';

export const metadata = {
    title: "Perfil",
    description: "Acompanhe seus investimentos",
  };
  
export default function Perfil(){
    return(
        <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center bg-darkBg text-white">
            <Image src={npp} width={140} alt='imagem de perfil' className='rounded-full'/>
            <h1 className='text-textDestaque text-[36px] font-semibold'>Nicolas Pereira Paz</h1>
            <div className='flex flex-col justify-center items-center gap-6'>
            <Link href='#' className='glass py-5 px-12 w-[400px] text-center'>Ver Dados</Link>
            <Link href='/repass' className='glass py-5 px-12 w-full text-center'>Redefinir senha</Link>
            <Link href='/' className='glass py-5 px-12 w-full text-center'>Sair da conta</Link>
            </div>
            <Link href='/home' className='text-textApagado text-[20px] font-semibold flex items-center gap-2'> <Image src={voltar} width={40} alt='voltar'/>Voltar</Link>
            <Image src={logo} width={180} alt='logo-finovo' className='absolute bottom-8'/>
        </div>
    )
}