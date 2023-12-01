import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logo.svg";
import heroImg from "../../public/graph.png";
import porcoSobre from "../../public/porco-sobre.png";
import controle from "../../public/controle.png";
import reducao from "../../public/reducao.png";
import facil from "../../public/facil.png";
import gestao from "../../public/gestao.png";

import Card from "@/components/Card";
import Func from "@/components/Func";

export const metadata = {
  title: "Finovo",
  description: "Pagina inicial",
};

export default function Index() {
  return (
    <div className="background-image text-white">
      <header className="flex items-center py-6 px-16 justify-between">
        <Image src={logo} width={70} alt="logo-finovo"></Image>
        <ul className="flex gap-14  font-bold">
          <li>
            <Link href="#obj" passHref legacyBehavior>
              <a>Objetivos</a>
            </Link>
          </li>
          <li>
            <Link href="#simulador" passHref legacyBehavior>
              <a>Simulador De Rendimentos</a>
            </Link>
          </li>
          <li>
            <Link href="#funcoes" passHref legacyBehavior>
              <a>Funções Essenciais</a>
            </Link>
          </li>
          <li>
            <Link href="#sobre" passHref legacyBehavior>
              <a>Sobre Nós</a>
            </Link>
          </li>
        </ul>
        <div className="login"></div>
        <Link
          href="/login"
          className="px-6 py-3 bg-mainPurple rounded-full font-semibold shadow-md"
        >
          Entrar
        </Link>
      </header>

      <div className="flex items-center justify-center m-10 h-screen">
        <div className="flex flex-col gap-4 pl-16">
          <h1 className="font-bold text-[90px]">
            Seu mapa em busca do sucesso financeiro!
          </h1>
          <p className="text-[32px] w-3/4">
            O Finovo te ajuda a tomar as melhores decisões financeiras
          </p>
          <Link
            href="/create"
            className="mt-10 px-10 py-5 w-56 justify-center flex font-semibold glass rounded-full text-2xl"
          >
            Abrir conta
          </Link>
        </div>

        <Image src={heroImg} width={700} alt="imagem-hero" className="pr-16"/>
      </div>

      <div className="intro flex flex-col justify-center items-center gap-8 h-[700px]">
        <h2 className="text-[90px] font-bold">FÁCIL, SIMPLES E INTUITIVO</h2>
        <p className="text-[32px] whitespace-pre-line w-2/4 text-center">
          Experimente a simplicidade e rapidez incomparáveis do FINOVO. Deixe
          sua vida financeira em nossas mãos 🤝
        </p>
      </div>

      <div className="flex flex-col gap-8 items-center py-11 my-11" id="obj">
        <h2 className="text-[90px] font-bold text-center">Nossos objetivos</h2>
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-6">
            <Card path={controle} title="Controle Financeiro" />
            <Card path={reducao} title="Redução De Dívidas" />
          </div>
          <div className="flex flex-col gap-6">
            <Card path={facil} title="Facilidade De Uso" />
            <Card path={gestao} title="Gestão De Investimento" />
          </div>
        </div>
      </div>

      <div className="bg-[#1B1C1E] py-11 h-screen " id="simulador">
        <h2 className="text-[90px] font-bold text-center">
          Simulador de Rendimentos
        </h2>
      </div>

      <div className="py-11 " id="funcoes">
        <h2 className="text-[90px] font-bold text-center">
          Funções Essenciais
        </h2>
        <Func />
      </div>

      <div className="bg-[#1B1C1E] py-11 flex flex-col items-center" id="sobre">
        <h2 className="text-[90px] font-bold text-center">Sobre nós</h2>

        <div className="flex justify-around flex-col justify-center items-center w-3/4 gap-8 mt-16">
          
            <h2 className="text-[40px] font-bold">O que é finovo?</h2>
            <p className="text-[20px] text-center">
              Finovo é um aplicativo de gestão financeira que tem em seu
              principal objetivo orientar pessoas sem estudo do assunto. Nosso
              lema é deixar a vida do cidadão com menos preucupações do que já
              existem
            </p>
            <h2 className="text-[40px] font-bold">Como surgimos? </h2>
            <p className="text-[20px] text-center">
              Inicialmente surgimos com a intenção de ajudar as pessoas a se
              planejar financeiramente, como um projeto de TCC (Trabalho de
              Conclusão de Curso) do Curso Técnico em Informática para Internet,
              feito pelos alunos Lucas Chini, Micael Pinardi e Rafael Furian.
            </p>
  
          <Image src={porcoSobre} width={500} alt="logo-finovo" className="mt-16"></Image>
        </div>
      </div>
    </div>
  );
}
