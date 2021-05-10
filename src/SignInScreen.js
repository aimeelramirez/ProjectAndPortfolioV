// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

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
    signInSuccessUrl: '/#',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
            provider: 'apple.com',
        },

    ],
};

function SignInScreen() {
    return (
        <div>
            <h1>Project and Portfolio V:<br /> Aimee Ramirez</h1>

            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default SignInScreen