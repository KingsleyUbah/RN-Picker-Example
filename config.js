import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCI02kM1alhvtyLo2Y6y94LGjtcZeshJew",
    authDomain: "app-auth-dev.firebaseapp.com",
    projectId: "app-auth-dev",
    storageBucket: "app-auth-dev.appspot.com",
    messagingSenderId: "215943813545",
    appId: "1:215943813545:web:2a9733c45298a867fa4cb8"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export{firebase};