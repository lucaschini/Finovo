import NavItem from "./NavItem";

import { LuHome, LuWallet } from "react-icons/lu";
import { BiMoney } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { BsCalendar, BsListCheck } from "react-icons/bs";


export default function Nav(){
    return(
        <div className="flex flex-col justify-around items-center gap-4">
            <NavItem path='/home'><LuHome /> Página Inicial</NavItem>
            <NavItem path='/investimentos'><BiMoney /> Investimentos</NavItem>
            <NavItem path='/objetivos'><TbTargetArrow /> Objetivos</NavItem>
            <NavItem path='/contas'><LuWallet /> Contas</NavItem>
            <NavItem path='/planejamento'><BsListCheck /> Planejamento</NavItem>
            <NavItem path='/calendario'><BsCalendar /> Calendario</NavItem>
        </div>
    )
}