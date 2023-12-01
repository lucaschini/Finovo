import Image from 'next/image';

export default function Card(props){
    return(
        <div className="w-[630px] h-[360px] background-card flex flex-col justify-center items-center p-5 gap-5 rounded-xl shadow-lg">
            <Image src={props.path} width={150}/>
            <h1 className="text-[45px] font-bold">{props.title}</h1>
        </div>
    )
}