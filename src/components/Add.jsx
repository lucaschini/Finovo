import Image from "next/image";

import fechar from "../../public/fechar.png";
import npp from "../../public/npp.jpg";

export default function Add(props) {
  return (
    <div className={`border-confirm w-[660px] h-[660px] bg-darkBg rounded-[10px] flex flex-col p-6 gap-20 border justify-around items-center`}>
      <h1 className={`text-confirm text-[30px] font-semibold  text-center`}>
        {props.title}
      </h1>

      <div className="gap-20 flex">
            <div className='flex flex-col'> 
                <p className='text-[20px] font-semibold'>Valor da receita</p>
                <p className='text-[48px]'>R$ </p>
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="email">Descrição</label>
                <input type="text" id="email" className="bg-input bg-opacity-5 p-2 rounded-lg focus:outline-none"/>

                <label htmlFor="email">Data da receita</label>
                <input type="text" id="email" className="bg-input bg-opacity-5 p-2 rounded-lg focus:outline-none"/>

                <label htmlFor="email">Categoria</label>
                <input type="text" id="email" className="bg-input bg-opacity-5 p-2 rounded-lg focus:outline-none"/>

                <label htmlFor="email">Conta</label>
                <input type="text" id="email" className="bg-input bg-opacity-5 p-2 rounded-lg focus:outline-none"/>
                        
                        
            </div>
      </div>

        <button className={`bg-confirm px-6 py-3 rounded-[50px] w-3/4 text-darkBg text-[24px] font-semibold`}>Adicionar</button>
    </div>
  );
}
