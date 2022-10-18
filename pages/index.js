import Head from 'next/head'
import Image from 'next/image'
import { AiFillFacebook, AiOutlineDown } from "react-icons/ai";
import LoginForm from '../src/components/form/LoginForm';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center text-sm min-h-[98vh]">
        <div className="py-5 flex space-x-6 items-center text-gray-600">
          Français <AiOutlineDown />
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <Image src={"/img/igwrite.png"} width={150} height={130} objectFit="contain" className="mb-10" />
            <div className="flex space-x-2 justify-center items-center text-white bg-blue-500 font-bold px-8 rounded-sm py-1">
              <AiFillFacebook className="text-lg" />
              <span className="flex items-center">Continue with Facebook</span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 my-6">
            <div className="w-24 border-t"></div>
            <div className="font-bold text-gray-400 text-sm">OR</div>
            <div className="w-24 border-t"></div>
          </div>

          <LoginForm />
        </div>


      </div>

      <div className="flex flex-col items-center">
       <span className="text-sm">from</span>
      
       <div className="flex space-x-1items-center">
       <Image src={"/img/meta.png"} width={70} height={30} objectFit="contain"/>
       </div>
      </div>
      
    </div>
  )
}
