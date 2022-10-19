import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from "react";
import { AiFillFacebook, AiOutlineDown } from "react-icons/ai";
import LoginForm from '../src/components/form/LoginForm';

export default function Login() {
 
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center text-sm min-h-[90vh]">
        <div className="py-5 flex space-x-6 items-center text-gray-600">
          Français <AiOutlineDown />
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <Image src={"/img/igwrite.png"} width={150} height={130} objectFit="contain" className="mb-10" />
            <div className="flex space-x-2 justify-center items-center text-white bg-blue-500 font-bold px-8 rounded py-1">
              <AiFillFacebook className="text-lg" />
              <span className="flex items-center">Continuer avec Facebook</span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 my-6">
            <div className="w-24 border-t"></div>
            <div className="font-bold text-gray-400 text-sm">OU</div>
            <div className="w-24 border-t"></div>
          </div>
          <LoginForm />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-400 font-medium">from</span>

        <div className="flex space-x-1items-center">
          <Image src={"/img/meta.png"} width={53} height={30} objectFit="contain" />
        </div>
      </div>

    </div>
  )
}
