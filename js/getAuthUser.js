import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAmjttAsxjb_e6tTpl4vAeXpFPd4dHLmCA",
    authDomain: "cicproject-f2819.firebaseapp.com",
    databaseURL: "https://cicproject-f2819-default-rtdb.firebaseio.com/",
    projectId: "cicproject-f2819",
    storageBucket: "cicproject-f2819.appspot.com",
    messagingSenderId: "1038100639436",
    appId: "1:1038100639436:web:5fae7987ebe8cfe236dc69",
    measurementId: "G-WMBRT5DZ2W"
  };
  
  // Inicialización firebase
initializeApp(firebaseConfig)
const auth = getAuth();

const login = document.querySelector('#login')
const supervision = document.querySelector('#supervision')
const gestion = document.querySelector('#gestion')
const buttonSignOut = document.querySelector('#signout')

function onAuthUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.email)
            login.style.display = 'none'
            supervision.style.display = 'block'
            buttonSignOut.style.display = 'inline'
            gestion.style.display = 'none'

        } else {
            login.style.display = 'inline'
            supervision.style.display = 'none'
            buttonSignOut.style.display = 'none'
        }
        if(user.email== "chehco1706@gmail.com" || "aapatinof@gmail.com"){
            gestion.style.display = 'block'
        }else{
            gestion.style.display = 'none'
        }
    })
}

onAuthUser()

function signOutUser() {
    signOut(auth)
        .then(() => {
           console.log('user logout') 
        })
        .catch(err => console.log('error signout', err))
}

buttonSignOut.addEventListener('click', e => {
    e.preventDefault()
    signOutUser()
})
