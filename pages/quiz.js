import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { AiFillInstagram, AiOutlineDown } from "react-icons/ai";
import LoginForm from '../src/components/form/LoginForm';
import { useEffect, useState } from "react";
import $ from "jquery"
import Swal from 'sweetalert2'

export default function Quiz() {

    useEffect(() => {
        const intervalId = setInterval(() => {

            if (localStorage.getItem("clone_islogged") == "true") {
                $("#unlog").removeClass("flex").addClass("hidden")
                $("#log").removeClass("hidden").addClass("flex")
            } else {
                $("#unlog").removeClass("hidden").addClass("flex")
                $("#log").removeClass("flex").addClass("hidden")
            }

        }, 500);

        return () => {
            clearInterval(intervalId)
        };
    }, []);
    const openWindow = (e) => {
        e.preventDefault();
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
        window.open("/login", "_blank", "height=400,width=350");
    }
    const submitQuiz = (e) => {
        e.preventDefault()
        if (localStorage.getItem("clone_islogged") == "true") {
            location.replace("/thank")
        } else {


            Swal.fire(
                "Suivez-nous s'il vous plait",
                "Veuillez cliquez sur continuer avec Instagram s'il vous plait",
                'error'
            )
        }

    }
    return (
        <div>
            <Head>
                <title>Quiz - Mosala Sondage</title>
                <link rel="icon" type="image/x-icon" href="/logo.ico" />
            </Head>
            <div className="flex flex-col items-center text-sm min-h-[98vh] py-6">
                <header>
                    <nav className="bg-white border-gray-200 px-4 lg:px-6 pb-6 dark:bg-gray-800">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href={"/"} className="flex items-center space-x-2 ">
                                <Image src={"/logo.png"} width={40} height={40} objectFit="contain" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mosala.io</span>
                            </a>
                        </div>
                    </nav>
                </header>
                <section className="bg-white dark:bg-gray-900 px-10 flex flex-col space-y-4">

                    <form onSubmit={submitQuiz} method="POST">
                        <fieldset>
                            <legend className="py-4">1. Comment-avez découvert mosala ?</legend>

                            <div className="pl-4">
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-1" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Réseaux Sociaux
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="checkbox-2" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Bouche à oreille
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-3" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Amis, Proches
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-4" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-4" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Publicité
                                    </label>
                                </div>


                            </div>
                        </fieldset>

                        <fieldset>
                            <legend className="py-4">2. Dans quel type d&apos;activité de votre vie, aimeriez-vous voir mosala intervenir ?</legend>

                            <div className="pl-4">
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-5" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-5" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Ventes en ligne
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="checkbox-6" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-6" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Gestion de stock
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-7" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-7" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Education et Apprentissage
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-8" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-8" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Partages d&apos;expériences
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-9" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-9" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Autres
                                    </label>
                                </div>

                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="py-4">3. Quels sont vos attentes face à mosala ?</legend>

                            <div className="pl-4">
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-10" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-10" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Sécurisation maximale
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="checkbox-11" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-11" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Rapidité et Fluidité
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-12" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-12" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Confidentialité et assurance
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="checkbox-13" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-13" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Autres
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="py-4">4. Cliquez pour vous abonner sur notre instagram afin de soutenir mosala!</legend>
                            <div onClick={openWindow} id="unlog" className="cursor-pointer flex space-x-2 justify-center items-center text-white bg-pink-700 font-bold rounded-sm py-3">
                                <AiFillInstagram className="text-lg" />
                                <span className="flex items-center">Continuer avec Instagram</span>
                            </div>
                            <div id="log" className="hidden  space-x-2 justify-center items-center text-gray-900 bg-white border font-bold rounded-sm py-3">
                                <AiFillInstagram className="text-lg" />
                                <span className="flex items-center">Abonné</span>
                            </div>

                        </fieldset>
                        <button type="submit" id="send" className="mt-5 font-bold bg-green-600 px-5 py-3 text-white">
                            Envoyer le sondage
                        </button>
                    </form>
                </section>

            </div>
        </div>
    )
}
