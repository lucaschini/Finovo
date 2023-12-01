import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import npp from "../../../public/npp.jpg";
import Nav from "@/components/Nav";

export default function DashBoardLayout({ children }) {
  return (
    <div className="h-screen w-screen text-white flex bg-[#050112]">
      <div className="h-screen w-1/4 bg-mainPurple rounded-tr-[25px] rounded-br-[25px] shadow-md flex flex-col items-center justify-center">
      <Image src={logo} className="w-[80px] absolute top-28"/>
      <Nav />
      <Image src={npp} className="w-[58px] rounded-full absolute left-2 bottom-2"/>
      </div>
      <div className="w-full flex justify-center items-center text-white">{children}</div>
    </div>
  );
}
