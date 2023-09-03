import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import npp from "../../../public/npp.jpg";
import Nav from "@/components/Nav";

export default function DashBoardLayout({ children }) {
  return (
    <div className="h-screen w-screen text-white flex ">
      <div className="h-screen w-1/4 bg-mainPurple rounded-tr-[25px] rounded-br-[25px] shadow-md flex flex-col items-center justify-center">
      <Image src={logo} className="w-[63px] absolute top-8"/>
      <Nav />
      <Image src={npp} className="w-[38px] rounded-full absolute left-2 bottom-2"/>
      </div>
      <div className="w-full flex justify-center items-center">{children}</div>
    </div>
  );
}
