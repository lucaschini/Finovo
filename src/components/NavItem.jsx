'use client'

import Link from 'next/link';
import { usePathname} from 'next/navigation';

export default function NavItem(props){
    const pathname = usePathname();

    const glass = 'py-3 rounded-[20px] shadow-md bg-white text-mainPurple'

    const active = `${pathname == props.path ? glass : '' }`

    return <Link href={props.path} className={active + " text-xl flex gap-5 items-center w-[300px] px-5"}>{ props.children }</Link>
        

}