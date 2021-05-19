import React, { useState, useEffect } from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
// import * as actionTypes from "../action/action";
import Grid from './Grid.js'

import Navigation from './navigation'
import { useHistory } from 'react-router-dom'
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
console.log("Uploading data to the database with the following config:\n");
console.log("\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n");
const db = firebase.firestore()


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
    let history = useHistory()

    // const [messageData, setMessages] = useState({})
    const [loading,] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const messageRef = React.useRef();

    useEffect(() => {
        if (isSignedIn === false) {
            document.title = `You are signed out! `;
        } else {
            document.title = `You are signed in! `;
        }
    });

    useEffect(() => {
        const unregisterAuthObserver =
            firebase.auth().onAuthStateChanged(user => {
                setIsSignedIn(!!user);

            });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    async function UploadData(newMessage) {

        var batch = db.batch();
        const messages = db.collection('messages');
        let authUser = firebase.auth().currentUser.providerData[0]
        console.log(authUser)
        let postMessage = {
            user: authUser.displayName,
            email: authUser.email,
            provider: authUser.providerId,
            message: newMessage
        }


        const response = await messages.add(postMessage);
        console.log("loading...", response)


        // return a Spinner when loading is true
        if (!loading) {
            alert("success")
            return batch.commit()
        } else {
            console.log("loading...")
            return (
                <span>Loading</span>
            );
        }
    }


    const handleLogout = () => {
        firebase.auth().signOut()
        history.push("/")
    }


    const handleSubmit = (user) => {
        console.log(user.currentUser.isAnonymous)
        /* TODO */
        //get to read the data on the page to show poc on send a message 
        // const dataRef = db.collection('messages');
        // dataRef.get()
        //     .then(doc => {
        //         if (doc.empty) {
        //             console.log('No such document!');
        //             return;
        //         } else {
        //             setMessages(doc.docs)
        //         }

        //         doc.forEach(i => {
        //             // console.log(i.data().name);
        //             let newDataName = i.data();
        //             console.log("doc:", newDataName)

        //         })
        //     })

        if (user.currentUser.isAnonymous) {
            history.push("/guest")
            return (
                <div>
                    <h1>My App</h1>
                    <p>Welcome Guest!
                    </p>
                    <p>Please login to see current build, Thanks!</p>
                    <button onClick={() => handleLogout()}>Sign-out</button>
                </div>
            );
            // eslint-disable-next-line
        }
        else if (!user.currentUser.isAnonymous && user.currentUser.providerData[0].providerId === 'google.com') {
            let readUser = user.currentUser
            console.log(user.currentUser)
            return (
                // Get private routes unless signed in
                <div>
                    <h1>My App</h1>
                    <p>Welcome {readUser.displayName}!
                    <br />You are now signed-in with email: {readUser.email}!
                    <br /> As your sign-in provider: {user.currentUser.providerData[0].providerId}
                        <Navigation />
                        <section id="grid">
                            {/* Example of typescript with animation on grid with react js */}
                            <Grid />
                        </section>
                        <form>
                            <div>
                                <label htmlFor="message">Message</label>
                                <input
                                    id="message"
                                    ref={messageRef}
                                />
                            </div>
                            <button type="submit" onClick={(e) => {
                                e.preventDefault()

                                let sendMessage = messageRef.current.value
                                UploadData(sendMessage)
                            }}>Submit</button>
                        </form>
                    </p>
                    <button onClick={() => handleLogout()}>Sign-out</button>
                </div >
            );

        } else if (!user.currentUser.isAnonymous) {
            let readUser = user.currentUser.providerData[0]
            console.log(user.currentUser)
            return (
                // Get private routes unless signed in
                <div>
                    <h1>My App</h1>
                    <p>Welcome {readUser.displayName}!
                    <br />You are now signed-in with email: {readUser.email}!
                    <br /> As your sign-in provider: {readUser.providerId}
                        <Navigation />
                        <section id="grid">
                            {/* Example of typescript with animation on grid with react js */}
                            <Grid />
                        </section>
                        <form>
                            <div>
                                <label htmlFor="message">Message</label>
                                <input
                                    id="message"
                                    ref={messageRef}
                                />
                            </div>
                            <button type="submit" onClick={(e) => {
                                e.preventDefault()

                                let sendMessage = messageRef.current.value
                                UploadData(sendMessage)
                            }}>Submit</button>
                        </form>
                    </p>
                    <button onClick={() => handleLogout()}>Sign-out</button>
                </div >
            );

        } else {
            console.log("catch any odd errors on load.")
        }

    }
    if (!isSignedIn) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />

            </div>
        );
    } else {
        return handleSubmit(firebase.auth())

    }

}

export default SignInScreen