import Image from "next/image";

import plus from "../../../../public/plus.png";
import minus from "../../../../public/minus.png";

import saldo from "../../../../public/graficoSaldoTotal.png";
import graph from "../../../../public/graph.png";
import grafico from "../../../../public/grafico.png";
import logo1 from "../../../../public/logo1.png";
import acoes from "../../../../public/acoes.png";
import contas from "../../../../public/contas.png";

export const metadata = {
  title: "Home",
  description: "Dashboard",
};

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Image
        src={logo1}
        width={150}
        alt="plus"
        className="absolute bottom-4 right-4"
      />
      <h1 className="text-[32px] font-bold mb-10">Seja bem vindo, Nicolas!</h1>

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 w-[900px]">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col justify-center items-center gap-10 bg-confirm w-[185px] h-[260px] rounded-lg">
              <Image src={plus} width={100} alt="plus" />
              <p className="">Adicionar Receita</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-10 bg-deleteForte w-[185px] h-[260px] rounded-lg">
              <Image src={minus} width={100} alt="plus" />
              <p className="">Adicionar despesa</p>
            </div>

            <div className="flex flex-col items-center gap-5 glass w-[430px] h-[260px] rounded-lg">
              <p className="flex text-[25px] font-regular mt-5">Saldo Total</p>
              <p className="text-[40px] font-extrabold text-textApagado">
                R$ 303.017,49
              </p>
              <Image
                src={saldo}
                width={0}
                alt="plus"
                className="absolute bottom-0"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 glass h-[400px]">
            <h2 className="mt-6 text-[22px]">Pagamentos</h2>
            <Image src={contas} width={0} alt="contas" />
          </div>
        </div>

        <div className="flex flex-col gap-10 w-[429px]">
          <div className="glass w-[429px] h-[260px] flex flex-col items-center gap-2">
            <p className="flex text-[25px] font-regular mt-3">Orçamento</p>
            <div className="flex items-center w-3/4">
              <Image src={graph} width={0} alt="grafico" />
              <p>Este mês, você já utilizou 70% do seu orçamento planejado</p>
            </div>
            <button className="bg-textDestaque px-7 py-3 rounded-full">
              Visualizar
            </button>
          </div>
          <div className="w-[429px] h-[400px] glass flex flex-col gap-2 items-center">
            <h2 className="mt-6 text-[22px]">Seus Investimentos</h2>
            <h3 className="text-[16px]">Últimos 7 dias</h3>
            <Image src={grafico} width={0} alt="grafico" />
            <div className="flex gap-5">
              <Image src={acoes} width={0} alt="grafico" />
              <Image src={acoes} width={0} alt="grafico" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
