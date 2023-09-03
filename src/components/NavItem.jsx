'use client'

import Link from 'next/link';
import { usePathname} from 'next/navigation';

export default function NavItem(props){
    const pathname = usePathname();

    const glass = 'py-3 rounded-[20px] shadow-md backdrop-blur-xl bg-gradient-to-br from-glassStart to-glassEnd'

    const active = `${pathname == props.path ? glass : '' }`

    return <Link href={props.path} className={active + " text-sm flex gap-2 items-center w-[150px] px-5"}>{ props.children }</Link>
        

}