import React, { useState, useEffect } from "react";
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
// import { data } from "../action/data"
import { FaHeart } from "react-icons/fa";
import loadingPhoto from "./../styles/images/loadingImage.svg";
import Spinner from "./Spinner/spinner";
// import { FetchProductImages } from '../action/unsplash'
import styles from "./../styles/styles.module.css";
import "./../styles/rater.scss";
import Rater from "react-rater";


export default function Favorites() {
  const [open, set] = useState(false);
  const springApi = useSpringRef();
  const [state, setState] = useState();
  useEffect(() => {
    const getApi = async () => {
      let authUser = "";
      if (auth.currentUser.providerData[0].providerId === "google.com") {
        authUser = auth.currentUser;
      } else {
        authUser = auth.currentUser.providerData[0];
      }
      let docRef = db.collection("users").doc(authUser.uid);
      console.log(docRef);
      docRef.get().then(
        await function (thisDoc) {
          if (thisDoc.exists) {
            const favs = thisDoc.data().favorites.card.items;

            setState(favs);
          } else {
            console.log("no document exists.");
          }
        }
      );
    };
    getApi();
  }, []);

  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20% !important",
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
    trail: 400 / state ? state.length : 0,
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
    set((open) => !open);
    return () => { };
  }, []);
  if (state && state.length > 0) {
    return (
      <div id="wrapper">
        <animated.div
          style={{ ...rest, width: size, minWidth: "10rem", height: size }}
          className={styles.container}
        >
          {transition((style, fav) => {
            if (fav.item.urls) {
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
                      width: "100%",
                      backgroundImage: "url(" + fav.item.urls.full + ")",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top",
                    }}
                  >
                    <section>
                      <article>
                        <header
                          className="text"
                          style={{
                            color: "black",
                          }}
                        >
                          {" "}
                          <Rater
                            className="react-rater-star"
                            total={5}
                            rating={fav.stars}
                          />
                          <p>#{fav.item.id}</p>
                          <p>Description:</p>
                          <p>
                            {fav.item.alt_description
                              ? fav.item.alt_description
                              : fav.item.description}
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
                      backgroundImage: "url(" + loadingPhoto + ")",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top",
                    }}
                  >
                    <section>
                      <article>
                        <Rater
                          className="react-rater-star"
                          total={5}
                          rating={fav.stars}
                        />
                        <br />
                        <header
                          className="text"
                          style={{
                            color: "black",
                          }}
                        >
                          <p>#{fav.item.id}</p>
                          <p>Description:</p>
                          <p>
                            {fav.item.alt_description
                              ? fav.item.alt_description
                              : fav.item.description}
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
  } else if (!state || state.length === 0) {
    return (
      <span style={{ margin: "0 auto", color: "lightgrey", fontSize: "18px" }}>
        There are no favorites yet, add them from board.
      </span>
    );
  } else {
    return <Spinner />;
  }
}
