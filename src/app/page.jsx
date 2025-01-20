import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "Finovo",
  description: "Pagina inicial",
};

export default function Index() {
  return (
    <div className="bg-hero text-white">
      <header className="flex items-center py-6 px-16 sm:justify-center">
        <Image
          src="/logo1.png"
          fill
          objectFit="cover"
          alt="logo-finovo"
          className="w-[170px] static"
        ></Image>

        <Link
          href="/login"
          className="absolute top-4 right-5 px-6 py-3 glass rounded-full font-semibold shadow-md"
        >
          Entrar
        </Link>
      </header>

      <div className="flex flex-col items-center justify-center gap-4 h-screen">
        <h1 className="font-bold text-5xl sm:text-[90px] text-center">
          Controle financeiro descomplicado
        </h1>
        <p className="text-[32px] w-3/4 text-center">
          Gerencie suas finanças com facilidade e confiança no Finovo
        </p>
        <Link
          href="/create"
          className="mt-10 px-10 py-5 w-60 justify-center flex font-semibold glass rounded-full text-2xl"
        >
          Abrir conta
        </Link>
      </div>

      <div className="flex flex-col items-center gap-20 pt-20 pb-8 bg-darkBg w-full ">
        <h2 className=" text-3xl xl:text-[90px] font-bold">
          FÁCIL, SIMPLES E INTUITIVO
        </h2>
        
        <div className="flex w-full justify-between">
          <Image src="/esquerdaBlob.svg" fill alt="logo-finovo" className="hidden xl:block"></Image>
          <Image src="/celular.svg" fill alt="logo-finovo"></Image>
          <Image src="/direitaBlob.svg" fill alt="logo-finovo" className="hidden xl:block"></Image>
        </div>
        <p className="text-xl sm:text-[32px] w-[80%] text-center line">
          Experimente a simplicidade e rapidez incomparáveis do FINOVO. Deixe
          sua vida financeira em nossas mãos 🤝
        </p>
      </div>

      <div
        className="flex flex-col gap-8 items-center py-20 bg-input text-darkBg"
        id="obj"
      >
        <h2 className="text-4xl sm:text-[90px] font-bold text-center text-textDestaque">
          Nossos objetivos
        </h2>
        <div className="flex flex-col sm:flex-row justify-arround items-center gap-10 my-16 px-12">
          <div className="flex flex-col gap-5 items-center text-center">
            <Image src="controle.svg" fill alt="logo-finovo"></Image>
            <h2 className="text-3xl font-bold">Controle Financeiro Eficiente</h2>
            <p>
              Permite que os usuários do Finovo tenham um controle claro e
              detalhado de suas finanças, ajudando na organização,
              acompanhamento de gastos e receitas, e facilitando o entendimento
              de seu cenário financeiro geral.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <Image src="melhoria.svg" fill alt="logo-finovo"></Image>
            <h2 className="text-3xl font-bold">Melhoria Na Saúde Financeira</h2>
            <p>
              Oferecer ferramentas e insights para que os usuários possam
              gerenciar e reduzir suas dívidas, ajudando a promover uma melhor
              saúde financeira e equilíbrio no orçamento pessoal.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <Image src="facilidade.svg" fill alt="logo-finovo"></Image>
            <h2 className="text-3xl font-bold">Facilidade Na Gestão</h2>
            <p>
              Possibilitar aos usuários a administração inteligente de seus
              investimentos, fornecendo informações relevantes, análises e
              recursos para que possam tomar decisões informadas e maximizar seu
              potencial de investimento.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-darkBg py-11 flex flex-col items-center" id="sobre">
        <h2 className="text-6xl sm:text-[90px] font-bold text-center">
          Sobre nós
        </h2>

        <div className="flex justify-around items-center w-3/4 gap-8 mt-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-[40px] font-bold text-center sm:text-left">
              O que é finovo?
            </h2>
            <p className="text-[20px] text-center sm:text-left">
              Finovo é um aplicativo de gestão financeira que tem em seu
              principal objetivo orientar pessoas sem estudo do assunto. Nosso
              lema é deixar a vida do cidadão com menos preucupações do que já
              existem
            </p>
            <h2 className="text-[40px] font-bold text-center sm:text-left">
              Como surgimos?
            </h2>
            <p className="text-[20px] text-center sm:text-left">
              Inicialmente surgimos com a intenção de ajudar as pessoas a se
              planejar financeiramente, como um projeto de TCC (Trabalho de
              Conclusão de Curso) do Curso Técnico em Informática para Internet,
              feito pelos alunos Lucas Chini, Micael Pinardi e Rafael Furian.
            </p>
          </div>
        </div>
        <Image src="/logo1.png" width={170} height={200} alt="logo-finovo" className="mt-20" />
      </div>
    </div>
  );
}
