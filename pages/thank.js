import Head from 'next/head'
import Image from 'next/image'
import {useEffect} from 'react';
import { AiFillFacebook, AiOutlineDown } from "react-icons/ai";
import LoginForm from '../src/components/form/LoginForm';

export default function Thank() {
   useEffect(() => {
    localStorage.setItem("clone_islogged", false);
   }, []);
    return (
        <div>
            <Head>
                <title>Remerciements - Mosala Sondage</title>
                <link rel="icon" type="image/x-icon" href="/logo.ico" />
            </Head>
            <div className="flex flex-col items-center text-sm min-h-[98vh]">
                <header>
                    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-8 dark:bg-gray-800">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href={"/"} className="flex items-center space-x-2 ">
                               <Image src={"/logo.png"} width={40} height={40} alt="logo" objectFit="contain"/>
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mosala.io</span>
                            </a>
                        </div>
                    </nav>
                </header>
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <a
                            href="#"
                            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                            role="alert"
                        >
                            <span className="text-xs bg-primary-600 rounded-full text-gray-500 px-4 py-1.5 mr-3">
                                Fin,
                            </span>{" "}
                            <span className="text-sm font-medium my-2">
                                Mosala vous dit merçi!
                            </span>
                            <svg
                                className="ml-2 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <h1 className="my-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Merci d&apos;être passé!
                        </h1>
                    </div>
                </section>

            </div>
        </div>
    )
}
