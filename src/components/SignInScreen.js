import React, { useState, useEffect, useRef } from "react";
import { auth, db, uiConfig, HandleLogout, notify } from "./Config/config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebaseui/dist/firebaseui.css";
// import * as actionTypes from "../action/action";
// import Grid from './../components/Grid'
import Sections from "./Guest/Sections";
import styles from "./../styles/styles.module.css";
import { FiTrash, FiEdit } from "react-icons/fi";
import { Redirect, Link } from "react-router-dom";
// import Navigation from './navigation'
// import { useHistory } from 'react-router-dom'
import Modal from "./Modal/Modal";

import Favorites from "./Favorites";
import Spinner from "./Spinner/spinner";
import { ToastContainer } from "react-toastify"
import "./../../node_modules/react-toastify/dist/ReactToastify.css"

let items = [];

function SignInScreen() {
  // let history = useHistory()
  let toastId = useRef(null)
  const [feed, setFeed] = useState({ items: undefined });
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const messageRef = useRef();
  const editRef = useRef(null);
  const [input,] = useState(null);
  const [cardState, setCard] = useState(null);
  const cardRef = useRef();
  const [stateModal, setStateModal] = useState({
    show: false,
  });
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
    GetData()

  }, [])

  const GetData = () => {
    setLoading(false)
    const dataRef = db.collection("messages");
    dataRef.get().then((doc) => {
      if (doc.empty) {
        console.log("No such document!");
        setFeed({ items: [] });

        return;
      } else {
        console.log(doc.docs);
      }

      doc.forEach((i) => {
        // //console.log(i.data().name);
        let newDataName = i.data();
        console.log("new: ", i);
        let readPost = {
          post: newDataName,
          postId: i.id,
        };
        items.push(readPost);
        setFeed({ items: [] });
        return setFeed({ items: items });

      });
      items = []



    });

  };
  async function UploadData(newMessage) {
    var batch = db.batch();
    const messages = db.collection("messages");
    //console.log(JSON.stringify(messages));
    let authUser = auth.currentUser.providerData[0];
    if (newMessage !== "") {
      //console.log(authUser);
      let postMessage = {
        user: authUser.displayName,
        email: authUser.email,
        provider: authUser.providerId,
        message: newMessage,
        favs: [],
      };

      await messages.add(postMessage);
      //console.log("loading...", response);
      // note(
      //   "success:" +
      //   JSON.stringify(postMessage) +
      //   " to firestore: " +
      //   JSON.stringify(response.firestore._delegate._app.options_.projectId)
      // );

      if (loading) {
        note("success", "Success!");
        batch.commit();
        setTimeout(() => {
          return window.location.reload();

        }, 5000);
      } else {
        //console.log("loading...");
      }
    } else {
      note("error", "Please enter vaild post that isn't empty.");
      return null;
    }
  }

  const DeleteFeedItem = async (e, card) => {
    const dataRef = await db.collection("messages");

    dataRef.get().then((doc) => {
      if (doc.empty) {
        console.log("No such document!");
        return;
      } else {
        console.log(doc.docs);
      }
      let batch = db.batch();

      doc.forEach((i) => {
        if (card === i.id) {
          console.log(card + " : " + i.id);
          batch.delete(i.ref);
          note("info", "Deleted!");
          batch.commit();
          setTimeout(() => {
            return window.location.reload();

          }, 5000);
        }
      });
    });
  };

  function handleForm(e, post) {
    e.preventDefault();
    let postInput = editRef.current.value

    console.log("post == edit ref", post)
    if (input !== "") {
      EditFeedItem(postInput, post);
    }
    setStateModal({ show: false });
  }
  const submitModal = (e, card) => {
    e.preventDefault();
    setCard(card);
  };
  const hideModal = () => {
    let message = "Disregarded for edits.";
    note("info", message);

    setStateModal({ show: false });
  };

  const ShowModal = () => {
    return (
      <>
        <Link to="/loggedin/edit">
          <Modal show={stateModal.show}>
            <div id="buttons-modal">
              <span className={styles.modalClose} ref={toastId} onClick={hideModal}>
                <p>
                  <span>Close</span>
                </p>
              </span>
            </div>

            <div id="modal-message">
              <h5
                style={{
                  fontWeight: "700",
                  fontSize: "1.rem",
                  textAlign: "center",
                }}
              >
                Edit
              </h5>
              <form id="formEl">
                <input
                  type="text"
                  id="messageInput"
                  name="messageInput"
                  ref={editRef}
                />
                <button type="submit" onClick={(e) => {
                  handleForm(e, editRef)

                }}>
                  Submit
                </button>
              </form>
            </div>
          </Modal>
        </Link>
      </>
    );
  };
  const EditFeedItem = (post) => {
    console.log("edit:", post)
    let docRef = db.collection("messages").doc(cardState);
    let o = {
      message: "",
    };

    docRef.get().then(async function (doc) {
      console.log(cardState + ": " + doc.id);

      let batch = db.batch();

      if (doc.exists) {
        let item = doc.data().message;
        //console.log("item:", item);
        item = post;
        o = {
          message: item,
        };
        o.lastLoginDate = Date.now();
        docRef.update(o, { merge: true });
        note("success", "Updated!");
        await batch.commit();
        setTimeout(() => {
          return window.location.reload();

        }, 5000);
      }
    });
  };
  let ShowFeed = () => {
    setLoading(true)
    if (feed.items === undefined) {
      GetData()
      console.log(feed.items)
      return <Spinner />;
    }
    else if (feed.items.length > 0) {
      console.log(feed.items)
      return feed.items.map((item, i) => {
        //console.log(item);
        return (
          <>
            <ShowModal></ShowModal>
            <li
              id={item.postId}
              className={styles.message}
              ref={cardRef}
              key={i}
            >
              <p>
                {item.post.email ? (
                  <>
                    <h5>Email:</h5> <hr />
                    {item.post.email}
                  </>
                ) : (
                  <>
                    <h5>Name:</h5> <hr /> {item.post.user}
                  </>
                )}
              </p>
              <p>
                <h5>Provider:</h5>
                <hr /> {item.post.provider}
              </p>

              <p>
                <h5>Message:</h5>
                <hr /> {item.post.message}
              </p>
              <p>
                <FiTrash
                  onClick={(e) => {
                    e.preventDefault();
                    DeleteFeedItem(e, item.postId);
                  }}
                />
                <FiEdit
                  onClick={(e) => {
                    e.preventDefault();
                    submitModal(e, item.postId);
                    setStateModal({ show: true });
                  }}
                />
              </p>
            </li>
          </>
        );
      });
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
    if (user.currentUser.isAnonymous) {
      return (
        <>
          <ToastContainer limit={1} />
          <div>
            <Sections />
          </div>
        </>
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
          const items = thisDoc.data().favorites.card.items;
          o = {
            "favorites.card.items": items,
          };

          //user is already there, write only last login
          o.lastLoginDate = Date.now();
          docRef.update(o, { merge: true });

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
          <ToastContainer limit={1} />

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
                  <button onClick={() => { HandleLogout(); }}>Sign-out</button>
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
            <section id="grid-feed">
              <h4> Feed: </h4>

              <ul className={styles.messages}>
                <ShowFeed />
              </ul>
            </section>
            <section id="grid">
              <ToastContainer limit={1} />

              <h4> Favorites: </h4>
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
          const items = thisDoc.data().favorites.card.items;
          o = {
            "favorites.card.items": items,
          };

          //user is already there, write only last login
          o.lastLoginDate = Date.now();
          docRef.update(o, { merge: true });


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
          <ToastContainer limit={1} />

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
          <section id="grid-feed">
            <h4> Feed: </h4>
            <ul className={styles.messages}>
              <ShowFeed />
            </ul>
          </section>
          <section id="grid">
            <ToastContainer limit={1} />

            <h4> Favorites: </h4>
            {Favorites ? <Favorites /> : <p>Add Favorites from Board</p>}
          </section>
        </div>
      );
    } else {
      console.log("catch any odd errors on load.");
    }
  };
  const note = (type, note) => {

    notify(type, note)
  }
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
