import React, { useState, useEffect } from "react";
import { auth, db, uiConfig, HandleLogout } from "./Config/config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebaseui/dist/firebaseui.css";
// import * as actionTypes from "../action/action";
// import Grid from './../components/Grid'
import Sections from "./Guest/Sections";
import styles from "./../styles/styles.module.css";
import { FiTrash, FiEdit } from "react-icons/fi";
import { Redirect } from "react-router-dom";
// import Navigation from './navigation'
// import { useHistory } from 'react-router-dom'
import Favorites from "./Favorites";
import Spinner from "./Spinner/spinner";
let items = [];

function SignInScreen() {
  // let history = useHistory()
  const [feed, setFeed] = useState({ items: [] });
  const [loading] = useState(false);
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
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    const dataRef = db.collection("messages");
    dataRef.get().then((doc) => {
      if (doc.empty) {
        console.log("No such document!");
        return;
      } else {
        console.log(doc.docs.messages);
      }

      doc.forEach((i) => {
        // console.log(i.data().name);
        let newDataName = i.data();
        items = [];
        items.push(newDataName);
        setFeed({ items: [] });
        return setFeed({ items: items });
      });
    });
  };
  async function UploadData(newMessage) {
    var batch = db.batch();
    const messages = db.collection("messages");
    let authUser = auth.currentUser.providerData[0];
    if (newMessage !== "") {
      console.log(authUser);
      let postMessage = {
        user: authUser.displayName,
        email: authUser.email,
        provider: authUser.providerId,
        message: newMessage,
        favs: [],
      };

      const response = await messages.add(postMessage);
      console.log("loading...", response);
      alert(
        "success:" +
          JSON.stringify(postMessage) +
          " to firestore: " +
          JSON.stringify(response.firestore._delegate._app.options_.projectId)
      );

      if (!loading) {
        alert("success");
        batch.commit();
        return window.location.reload();
      } else {
        console.log("loading...");
      }
    } else {
      alert("Please enter vaild post that isn't empty.");
      return null;
    }
  }

  let ShowFeed = () => {
    if (feed.items.length > 0 && !loading) {
      return feed.items.map((item) => {
        return (
          <li className={styles.message}>
            <p>
              {item.email ? (
                <>
                  <h5>Email:</h5> <hr />
                  {item.email}
                </>
              ) : (
                <>
                  <h5>Name:</h5> <hr /> {item.user}
                </>
              )}
            </p>
            <p>
              <h5>Provider:</h5>
              <hr /> {item.provider}
            </p>

            <p>
              <h5>Message:</h5>
              <hr /> {item.message}
            </p>
            <p>
              <FiTrash
                onClick={(e) => {
                  e.preventDefault();
                  alert("404");
                }}
              />
              <FiEdit
                onClick={(e) => {
                  e.preventDefault();
                  alert("404");
                }}
              />
            </p>
          </li>
        );
      });
    } else if (loading) {
      return <Spinner />;
    } else if (feed.items.length === 0) {
      return (
        <span
          style={{ margin: "0 auto", color: "lightgrey", fontSize: "18px" }}
        >
          There are no entries.
        </span>
      );
    }
  };
  const handleSubmit = (user) => {
    console.log(user.currentUser.isAnonymous);
    /* TODO */
    //get to read the data on the page to show poc on send a message

    if (user.currentUser.isAnonymous) {
      return (
        <div>
          <Sections />
        </div>
      );
      // eslint-disable-next-line
    } else if (
      !user.currentUser.isAnonymous &&
      user.currentUser.providerData[0].providerId === "google.com"
    ) {
      let readUser = user.currentUser;
      let docRead = db.collection("users");
      if (!docRead) {
        docRead.add(readUser);
      }
      let docRef = db.collection("users").doc(readUser.uid);
      let o = {};
      docRef.get().then(function (thisDoc) {
        if (thisDoc.exists) {
          //user is already there, write only last login
          o.lastLoginDate = Date.now();
          docRef.update(o);
        } else {
          //new user
          o.displayName = auth.currentUser.displayName;
          o.accountCreatedDate = Date.now();
          o.lastLoginDate = Date.now();
          o.favorites = {
            card: {
              items: [],
            },
          };

          // Send it
          docRef.set(o);
        }
      });
      return (
        <>
          <div className={styles.welcome}>
            <Redirect from="/auth" to="/loggedin" />

            <section>
              <article>
                <p>
                  Welcome {readUser.displayName}!
                  <br />
                  You are now signed-in with email: {readUser.email}!
                  <br /> As your sign-in provider:{" "}
                  {user.currentUser.providerData[0].providerId}
                  <button onClick={() => HandleLogout()}>Sign-out</button>
                </p>
              </article>
              <article>
                <form>
                  <h5>Post a Message:</h5>
                  <div>
                    <label>Message</label>
                    <textarea
                      rows="8"
                      cols="30"
                      id="message"
                      ref={messageRef}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      let sendMessage = messageRef.current.value;
                      UploadData(sendMessage);
                    }}
                  >
                    Submit
                  </button>
                </form>
              </article>
            </section>

            <h4> Feed: </h4>
            <ul className={styles.messages}>
              <ShowFeed />
            </ul>
            <h4> Favorites: </h4>
            <section id="grid">
              {Favorites ? <Favorites /> : <p>Add Favorites from Board</p>}
            </section>
          </div>
        </>
      );
    } else if (!user.currentUser.isAnonymous) {
      let readUser = user.currentUser.providerData[0];
      let readUser1 = user.currentUser.providerData[0];

      let docRead = db.collection("users");
      if (!docRead) {
        docRead.add(readUser1);
      }
      let docRef = db.collection("users").doc(readUser1.uid);
      let o = {
        favorites: {
          card: {
            items: [],
          },
        },
      };
      docRef.get().then(function (thisDoc) {
        if (thisDoc.exists) {
          //user is already there, write only last login
          o.lastLoginDate = Date.now();
          docRef.update(o);
        } else {
          //new user
          o.displayName = auth.currentUser.displayName;
          o.accountCreatedDate = Date.now();
          o.lastLoginDate = Date.now();
          o.favorites = {
            card: {
              items: [],
            },
          };

          // Send it
          docRef.set(o);
        }
      });
      return (
        // Get private routes unless signed in
        <div className={styles.welcome}>
          <Redirect from="/auth" to="/loggedin" />

          <section>
            <article>
              <p>
                Welcome {readUser.displayName}!
                <br />
                You are now signed-in with email: {readUser.email}!
                <br /> As your sign-in provider: {readUser.providerId}
                <button onClick={() => HandleLogout()}>Sign-out</button>
              </p>
            </article>
            <article>
              <form>
                <h5>Post a Message:</h5>
                <div>
                  <label>Message</label>
                  <textarea rows="8" cols="30" id="message" ref={messageRef} />
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();

                    let sendMessage = messageRef.current.value;
                    UploadData(sendMessage);
                  }}
                >
                  Submit
                </button>
              </form>
            </article>
          </section>

          <h4> Feed: </h4>

          <ul className={styles.messages}>
            <ShowFeed />
          </ul>
          <h4> Favorites: </h4>

          <section id="grid">
            {Favorites ? <Favorites /> : <p>Add Favorites from Board</p>}
          </section>
        </div>
      );
    } else {
      console.log("catch any odd errors on load.");
    }
  };

  if (!isSignedIn) {
    return (
      <>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </>
    );
  } else {
    return handleSubmit(auth);
  }
}

export default SignInScreen;
