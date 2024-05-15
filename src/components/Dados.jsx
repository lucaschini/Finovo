import Image from 'next/image';

import fechar from "../../public/fechar.png";
import npp from "../../public/npp.jpg";

export default function Dados(props){
    return(
        <div className="w-[660px] h-[660px] glass flex flex-col p-20 gap-20">
            <Image src={fechar} width={35} alt='fechar' className='absolute top-4 right-4'/>
        
            <div className='flex gap-6 items-center'>
                <Image src={npp} width={120} alt='icon' className='rounded-full'/>
                <div>
                    <h1 className="text-[30px] font-semibold text-textDestaque">Nicolas Pereira Paz</h1>
                    <p><i>Finover</i> desde 30 de novembro de 2023</p>
                </div>
            </div>

            <div className='gap-5 flex flex-col'>
                <div>
                    <p className='text-[20px] text-semibold'>Data de Nascimento</p>
                    <p className='opacity-50'>18/03/2000</p>
                </div>
                <div>
                    <p className='text-[20px] text-semibold'>Email</p>
                    <p className='opacity-50'>nicolas.paz@gmail.com</p>
                </div>
                <div>
                    <p className='text-[20px] text-semibold'>Telefone</p>
                    <p className='opacity-50'>(11) 96350-0460</p>
                </div>
                <div>
                    <p className='text-[20px] text-semibold'>Principal Objetivo</p>
                    <p className='opacity-50'>Gerir Investimentos</p>
                </div>
            </div>
        </div>
    )
}