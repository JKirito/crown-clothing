import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBdmazja_EqOJ9ZrwT6vj0Qma3s94IoQnU",
  authDomain: "crwn-db-bf83e.firebaseapp.com",
  projectId: "crwn-db-bf83e",
  storageBucket: "crwn-db-bf83e.appspot.com",
  messagingSenderId: "205222380825",
  appId: "1:205222380825:web:09e7284b30ad6b428a3188",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
