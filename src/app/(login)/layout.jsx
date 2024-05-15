import "./login.css"
import Image from 'next/image'

import logo from "../../../public/logo.svg";


export default function LoginLayout({ children }) {
    return (
          <div className='text-white w-screen h-screen flex justify-center items-center flex-col bg-darkBg'>
            <div className=" h-screen w-screen sm:h-[74%] sm:w-[70vw] sm:rounded-[15px] bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex flex-col sm:flex-row">
              <div className="bg-mainPurple max-h-56 sm:max-h-full sm:w-[70%] flex justify-center items-center sm:rounded-tl-[15px] sm:rounded-bl-[15px] ">
                <Image src={logo}  className="max-w-[100px] m-4 sm:max-w-[150px]"/>
              </div>
              <div className="h-full w-full flex flex-col pt-10 sm:pt-20 gap-20 sm:pl-20 items-center sm:items-start">
                {children}
              </div>
            </div>
          </div>
    );
  }