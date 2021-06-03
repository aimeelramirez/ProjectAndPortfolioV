import firebase from "firebase";
import * as firebaseui from "firebaseui";
import { toast } from "react-toastify"
import "./../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./../../App.css"

export const notify = (toastType, note) => {
  if (note !== "") {
    switch (toastType) {
      case "success":
        toast('👍 ' + note, {
          autoClose: 5000,
          type: toast.TYPE.SUCCESS,
          closeButton: false,// Remove the closeButton
          closeOnClick: false,
          pauseOnHover: false,
        });
        break;
      case "error":
        toast('🖐 ' + note, {
          autoClose: 5000,
          type: toast.TYPE.ERROR,
          closeButton: false,// Remove the closeButton
          closeOnClick: false,
          pauseOnHover: false,
        });
        break;
      case "info":
        toast('✍️ ' + note, {
          autoClose: 5000,
          type: toast.TYPE.INFO,
          closeButton: false,// Remove the closeButton
          closeOnClick: false,
          pauseOnHover: false,
        });
        break;
      case "timeline":
        toast('💕  ' + note, {
          className: 'timeline',
          autoClose: 5000,
          type: toast.TYPE.INFO,
          closeButton: false,// Remove the closeButton
          closeOnClick: false,
          pauseOnHover: false,
        });
        break;
      default:
        break;
    }

  } else { return null }
}

// Configure Firebase.
export const Config = {
  apiKey: process.env.REACT_APP_FIRESTORE,
  authDomain: "projectandportfoliov-api.firebaseapp.com",
  projectId: "projectandportfoliov-api",
  storageBucket: "projectandportfoliov-api.appspot.com",
  messagingSenderId: "301701598347",
  appId: "1:301701598347:web:066b1871d7080c8f52588e",
  measurementId: "G-MWEWF5L0SC",
};

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/Users',
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => true,
  },
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: "apple.com",
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
};
export const HandleLogout = () => {
  if (firebase.auth().currentUser.isAnonymous) {
    //delete guest token
    firebase.auth().currentUser.delete();
    firebase.auth().signOut();
    return window.location.reload();


  } else {
    firebase.auth().signOut();
    return window.location.reload();
  }
};

firebase.initializeApp(Config);
console.log("Uploading data to the database with the following config:\n");
console.log(
  "\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n"
);
export const db = firebase.firestore();

export const auth = firebase.auth();


