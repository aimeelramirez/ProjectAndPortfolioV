// Import FirebaseAuth and firebase.
// eslint-disable-next-line
import React, { useState, useEffect, useReducer } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import * as actionTypes from "./action/action";
import { useRouteMatch } from 'react-router';

const initialState = {
    user: "",
    isAuth: false,
};
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                user: action.payload.user,
                isAuth: true,
            };
        case actionTypes.LOGOUT_USER:
            return {
                user: "",
                isAuth: false,
            };
        default:
            return state;
    }
};
// Configure Firebase.
const config = {
    apiKey: "AIzaSyB-zeAyZvTsatuQKDqW8_wkDNOP_N17XOw",
    authDomain: "projectandportfoliov-api.firebaseapp.com",
    projectId: "projectandportfoliov-api",
    storageBucket: "projectandportfoliov-api.appspot.com",
    messagingSenderId: "301701598347",
    appId: "1:301701598347:web:066b1871d7080c8f52588e",
    measurementId: "G-MWEWF5L0SC"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/Users',
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => true,
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        {
            provider: 'apple.com',
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
};


function SignInScreen() {
    const [stateAuth, setState] = useState({
        isAuth: false,
    });
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    useEffect(() => {
        if (stateAuth.isAuth === false) {
            document.title = `You are signed out! `;
        } else {
            document.title = `You are signed in! `;
        }
    });
    // const [values, setValues] = useState({
    //     email: '',
    //     name: ''
    // });
    // const handleChange = e => {
    //     setValues(oldValues => ({
    //         ...oldValues,
    //         [e.target.name]: e.target.value
    //     }));
    // }
    // return (
    //     <div>
    //         <h1>Project and Portfolio V:<br /> Aimee Ramirez</h1>
    //         <p>Please sign-in:</p>
    //         <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    //     </div>
    // );

    // Listen to the Firebase Auth state and set the local state.

    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init
                ({
                    appId: '563293921726253',
                    status: true,
                    cookie: true,
                    xfbml: true
                });
        };

        (function () {
            var e = document.createElement('script');
            e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
            e.async = true;
            document.getElementById('fb-root').appendChild(e);
        }());

        const unregisterAuthObserver =
            firebase.auth().onAuthStateChanged(user => {
                setIsSignedIn(!!user);

            });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
    const handleSubmit = (user) => {
        console.log(user)
        return (
            <div>
                <h1>My App</h1>

                <h2>{JSON.stringify(user)}</h2>
                <p>Welcome {firebase.auth().currentUser.email}!{firebase.auth().currentUser.displayName ? true : false} <br />{JSON.stringify(firebase.auth().currentUser)} <br />You are now signed-in!</p>
                <a onClick={() => firebase.auth().signOut()}><button>Sign-out</button></a>
            </div>
        );
    }
    if (!isSignedIn) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <form >
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </form>
            </div>
        );
    } else {
        return handleSubmit(firebase.auth().currentUser.providerData)

    }

}

export default SignInScreen