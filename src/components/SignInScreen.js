import React, { useState, useEffect } from 'react';
import { auth, db, uiConfig, HandleLogout } from './Config'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebaseui/dist/firebaseui.css'
// import * as actionTypes from "../action/action";
import Grid from './Grid.js'
import Sections from './Sections'
// import Navigation from './navigation'
// import { useHistory } from 'react-router-dom'


function SignInScreen() {
    // let history = useHistory()
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
            auth.onAuthStateChanged(user => {
                setIsSignedIn(!!user);

            });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    async function UploadData(newMessage) {

        var batch = db.batch();
        const messages = db.collection('messages');
        let authUser = auth.currentUser.providerData[0]
        console.log(authUser)
        let postMessage = {
            user: authUser.displayName,
            email: authUser.email,
            provider: authUser.providerId,
            message: newMessage
        }


        const response = await messages.add(postMessage);
        console.log("loading...", response)
        alert("success:" + JSON.stringify(postMessage) + " to firestore: "
            + JSON.stringify(response.firestore._delegate._app.options_.projectId))

        if (loading) {
            return batch.commit()
        } else {
            console.log("loading...")
            alert("success")
            return (
                <span>Loading</span>
            );
        }
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
            return (
                <div>
                    <Sections />
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
                        {/* <Navigation /> */}
                        <form>
                            <h5>Post a Message:</h5>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows="8" cols="30"
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
                        <h4>OR</h4>
                    </p>
                    <button onClick={() => HandleLogout()}>Sign-out</button>
                    <section id="grid">
                        {/* Example of typescript with animation on grid with react js */}
                        <Grid />
                    </section>
                </div >
            );

        } else if (!user.currentUser.isAnonymous) {
            let readUser = user.currentUser.providerData[0]
            return (
                // Get private routes unless signed in
                <div>
                    <h1>My App</h1>
                    <p>Welcome {readUser.displayName}!
                    <br />You are now signed-in with email: {readUser.email}!
                    <br /> As your sign-in provider: {readUser.providerId}
                        <form>
                            <h5>Post a Message:</h5>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows="8" cols="30"
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
                        <h4>OR</h4>

                    </p>
                    <button onClick={() => HandleLogout()}>Sign-out</button>
                    <section id="grid">
                        {/* Example of typescript with animation on grid with react js */}
                        <Grid />
                    </section>
                </div >
            );

        } else {
            console.log("catch any odd errors on load.")
        }

    }
    if (!isSignedIn) {
        return (
            <>

                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={auth}
                />

            </>
        );
    } else {
        return handleSubmit(auth)

    }

}

export default SignInScreen