import { useState, useEffect, useRef } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import { auth, db } from "./Config/config";
// import { MdStar } from "react-icons/md"
import { FaHeart } from "react-icons/fa";
import styles from "./../styles/styles.module.css";
import { FetchProductImages } from "../action/unsplash";
import Spinner from "./Spinner/spinner";
import loadingPhoto from "./../styles/images/loadingImage.svg";
import Rater from "react-rater";
import "../styles/rater.scss";

export default function Grid() {
  const [open, set] = useState(false);
  const [loading] = useState(false);

  const springApi = useSpringRef();
  const [state, setState] = useState();
  let starRef = useRef();
  let cardRef = useRef();
  let [, setStarCount] = useState();
  useEffect(() => {
    const getApi = async () => {
      await FetchProductImages().then((res) => {
        console.log(res.results);
        if (res.results !== "") setState(res.results);
      });
    };
    getApi();
  }, []);

  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%",
      backgroundColor: "url(" + loadingPhoto + ")",
    },
    to: {
      size: open ? "100%" : "20%",
      backgroundImage: "url(" + loadingPhoto + ")",
    },
  });
  console.log("results outside STATE:", state);

  const transApi = useSpringRef();
  const transition = useTransition(open ? state : [], {
    ref: transApi,
    trail: 400 / state ? state.length : [],
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  useEffect(() => {
    return set((open) => !open);
  }, []);
  const handleCard = (e, item) => {
    e.preventDefault();
    // alert(item.alt_description)
    // console.log("card ref:", cardRef.current.children[0])
    let message = "You clicked: " + item.alt_description;
    // console.log("current: ", starRef.current)
    alert(message);
  };

  const handleChange = (e, item) => {
    setStarCount(e.rating);
    var batch = db.batch();
    if (!auth.currentUser) {
      alert("~~~~Please sign in before saving favorites.~~~~~~");
      return false;
    } else {
      let authUser = auth.currentUser.providerData[0];

      if (authUser.isAnonymous) {
        alert("~~~~Please sign in before saving favorites.~~~~~~");
        return false;
      } else if (authUser.providerId === "google.com") {
        let readUser = auth.currentUser;
        let docRef = db.collection("users").doc(readUser.uid);

        docRef.get().then(async function (thisDoc) {
          let n = {
            item: item,
            stars: e.rating,
          };
          alert(item);
          if (thisDoc.exists) {
            const items = thisDoc.data().favorites.card.items;
            items.push(n);
            let o = {
              "favorites.card.items": items,
            };
            //user is already there, write only last login
            o.lastLoginDate = Date.now();
            await docRef.update(o);
            console.log(JSON.stringify(o));
          } else {
            const items = thisDoc.data().favorites.card.items;

            console.log(items);
            items.push(n);
            let o = {
              "favorites.card.items": items,
            };
            // Send it
            docRef.set(o, { merge: true });
          }
        });
      } else {
        let docRef = db.collection("users").doc(authUser.uid);

        docRef.get().then(function (thisDoc) {
          let n = {
            item: item,
            stars: e.rating,
          };

          if (thisDoc.exists) {
            const items = thisDoc.data().favorites.card.items;
            console.log(thisDoc.data());
            console.log(items);
            items.push(n);
            let o = {
              "favorites.card.items": items,
            };
            //user is already there, write only last login
            o.lastLoginDate = Date.now();
            let response = docRef.update(o);
            console.log(response.firestore);
          } else {
            const items = thisDoc.data().favorites.card.items;

            console.log(items);
            items.push(n);
            let o = {
              "favorites.card.items": items,
            };
            // Send it
            docRef.set(o, { merge: true });
          }
        });
      }

      if (!loading) {
        alert("success");
        batch.commit();
      } else {
        console.log("loading...");
      }
    }
  };
  const handleStars = (e) => {
    console.log(e);
    // console.log(starRef.current)
    return starRef;
  };

  if (state && state.length > 9) {
    return (
      <div id="wrapper">
        <animated.div
          style={{ ...rest, width: size, minWidth: "10rem", height: size }}
          className={styles.container}
        >
          {transition((style, item) => {
            if (item.urls.full) {
              //refactor to pass props
              return (
                <animated.div
                  className={styles.item}
                  style={{ ...style, backgroundImage: "transparent" }}
                >
                  <div
                    className={styles.images}
                    style={{
                      height: "100%",
                      backgroundImage: "url(" + item.urls.full + ")",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top",
                    }}
                    onClick={(e) => {
                      handleCard(e, item);
                    }}
                  >
                    <section>
                      <article ref={cardRef}>
                        <header
                          className="text"
                          style={{
                            color: "black",
                          }}
                        >
                          <Rater
                            className="react-rater-star"
                            total={5}
                            rating={2}
                            ref={starRef}
                            onRate={(e) => {
                              handleChange(e, item);
                            }}
                            onClick={handleStars}
                          />

                          <p>#{item.id}</p>
                          <p>Description:</p>
                          <p className={styles.capital}>
                            {item.alt_description
                              ? item.alt_description
                              : item.description}
                          </p>
                          <p
                            style={{
                              float: "right",
                              color: "red",
                              fontSize: "20px",
                              marginBottom: "3rem",
                            }}
                          >
                            <FaHeart />
                          </p>
                        </header>
                      </article>
                    </section>
                  </div>
                </animated.div>
              );
            } else {
              //refactor to pass props
              return (
                <animated.div
                  className={styles.item}
                  style={{ ...style, backgroundImage: "transparent" }}
                >
                  <div
                    className={styles.images}
                    style={{
                      height: "100%",
                      backgroundColor: item.color,
                      backgroundImage: "url(" + loadingPhoto + ")",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top",
                    }}
                    onClick={(e) => {
                      handleCard(e, item);
                    }}
                  >
                    <section>
                      <article ref={cardRef}>
                        <header
                          className="text"
                          style={{
                            color: "black",
                          }}
                        >
                          <Rater
                            className="react-rater-star"
                            onRate={(e) => {
                              handleChange(e, item);
                            }}
                            total={5}
                            rating={2}
                            ref={starRef}
                            onClick={handleStars}
                          />

                          <p>#{item.id}</p>
                          <p>Description:</p>
                          <p className={styles.capital}>
                            {item.alt_description
                              ? item.alt_description
                              : item.description}
                          </p>
                          <p
                            style={{
                              float: "right",
                              color: "red",
                              fontSize: "20px",
                              marginBottom: "3rem",
                            }}
                          >
                            <FaHeart />
                          </p>
                        </header>
                      </article>
                    </section>
                  </div>
                </animated.div>
              );
            }
          })}
        </animated.div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}
