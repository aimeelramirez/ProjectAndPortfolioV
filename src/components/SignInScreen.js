import React, { useState, useEffect } from 'react';
import { auth, db, uiConfig, HandleLogout } from './Config'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebaseui/dist/firebaseui.css'
// import * as actionTypes from "../action/action";
import Grid from './Grid.js'
import Sections from './Sections'
import styles from "./../styles/styles.module.css"
import { FiTrash, FiEdit } from "react-icons/fi";
import { Redirect } from 'react-router-dom'
// import Navigation from './navigation'
// import { useHistory } from 'react-router-dom'

let items = []

function SignInScreen() {
    // let history = useHistory()
    const [feed, setFeed] = useState({ items: [] })
    const [loading,] = useState(false);
    const [submitted, setSubmit] = useState(false)
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const messageRef = React.useRef();
    const { from } = window.location.state || '/loggedin'

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
    useEffect(() => {
        GetData()

    }, [])

    const GetData = () => {
        const dataRef = db.collection('messages');
        dataRef.get()
            .then(doc => {
                if (doc.empty) {
                    console.log('No such document!');
                    return;
                } else {
                    console.log(doc.docs.messages)


                }

                doc.forEach(i => {
                    // console.log(i.data().name);
                    let newDataName = i.data();
                    items.push(newDataName)
                    console.log(items)
                    setFeed({ items: [] })
                    return setFeed({ items: items })

                })
            })
    }
    async function UploadData(newMessage) {

        var batch = db.batch();
        const messages = db.collection('messages');
        let authUser = auth.currentUser.providerData[0]
        if (newMessage !== "") {
            console.log(authUser)
            let postMessage = {
                user: authUser.displayName,
                email: authUser.email,
                provider: authUser.providerId,
                message: newMessage,
                favs: ["veggies", "fruits"]
            }

            const response = await messages.add(postMessage);
            console.log("loading...", response)
            alert("success:" + JSON.stringify(postMessage) + " to firestore: "
                + JSON.stringify(response.firestore._delegate._app.options_.projectId))

            if (!loading) {
                alert("success")
                batch.commit()
                return window.location.reload()



            } else {
                console.log("loading...")
            }
        } else {
            alert("Please enter vaild post that isn't empty.")
            return null
        }

    }


    let ShowFeed = () => {
        if (feed.items.length > 0 && !loading) {
            return feed.items.map((item) => {
                return <li className={styles.message}>
                    <p><h5>Email:</h5> <hr />{item.email}</p>
                    <p><h5>Provider:</h5><hr /> {item.provider}</p>

                    <p><h5>Message:</h5><hr /> {item.message}</p>
                    <p><FiTrash onClick={(e) => {
                        e.preventDefault()
                        alert("404")
                    }} />
                        <FiEdit onClick={(e) => {
                            e.preventDefault()
                            alert("404")
                        }} /></p>
                </li>
            })
        } else if (loading) {
            return (<>Loading...</>)
        } else if (feed.items.length === 0) {
            return (<span>There are no entries.</span>)
        }
    }
    const handleSubmit = (user) => {
        console.log(user.currentUser.isAnonymous)
        /* TODO */
        //get to read the data on the page to show poc on send a message

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
                <>
                    <div className={styles.welcome}>
                        <Redirect from="/auth" to="/loggedin" />

                        <section>
                            <article>
                                <p>Welcome {readUser.displayName}!
                   <br />You are now signed-in with email: {readUser.email}!
                    <br /> As your sign-in provider: {user.currentUser.providerData[0].providerId}
                                    <button onClick={() => HandleLogout()}>Sign-out</button>
                                </p>

                            </article>
                            <article>
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

                            </article>
                        </section>

                        <h4> Feed: </h4>
                        <ul className={styles.messages}>
                            <ShowFeed />
                        </ul>

                        <section id="grid">
                            {/* Example of typescript with animation on grid with react js */}
                            <Grid />
                        </section>

                    </div >
                </>
            );

        } else if (!user.currentUser.isAnonymous) {
            let readUser = user.currentUser.providerData[0]
            return (
                // Get private routes unless signed in
                <div className={styles.welcome}>
                    <Redirect from="/auth" to="/loggedin" />

                    <section>
                        <article>
                            <p>Welcome {readUser.displayName}!
                    <br />You are now signed-in with email: {readUser.email}!
                    <br /> As your sign-in provider: {readUser.providerId}

                                <button onClick={() => HandleLogout()}>Sign-out</button>
                            </p>
                        </article>
                        <article>
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
                        </article>
                    </section>

                    <h4> Feed: </h4>

                    <ul className={styles.messages}>
                        <ShowFeed />
                    </ul>


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