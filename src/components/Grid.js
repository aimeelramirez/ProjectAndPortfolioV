import React, { useState, useEffect } from "react"
import { MdStar } from "react-icons/md"
import styles from "./../styles/styles.module.css"
import { FetchProductImages } from '../action/unsplash'

export default function Grid() {


  const [state, setState] = useState()

  useEffect(() => {
    FetchProductImages().then(res => {
      console.log(res.results)
      return setState(res.results)
    })
  }, [])




  // TODO get data to only show on authenicated links
  if (state) {
    return (
      <div id="wrapper" >
        {/* <animated.div
        style={{ ...rest, width: size, minWidth: '10rem', height: size, paddingBottom: '5rem' }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      > */}
        {/* {!open ? <p className={styles.griddisplay}>Show Products</p> : open} */}
        {/* {transition((style, item) => (
        <animated.div

          className={styles.item}
          style={{ ...style, backgroundImage: 'url(' + item.urls.small + ')', backgroundSize: "cover" }}
        > */}
        <div className="item">
          {state.map((item, i) => (
            <article style={{ backgroundImage: 'url(' + item.urls.small + ')', backgroundSize: "cover" }}>
              <header>
                <p style={{
                  color: 'black', backgroundColor: "white"
                }}>
                  #{item.id}
                </p>
                <p>Description:</p>
                <p style={{
                  color: 'black', backgroundColor: "white"
                }}>{item.alt_description ? item.alt_description : item.description}</p>
              </header>

              <footer>
                <p>
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                </p>
              </footer>
            </article>
          ))}
          {/* </animated.div> */}
        </div>
        <div className="item">
          {state.map((item, i) => (
            <article style={{ backgroundImage: 'url(' + item.urls.small + ')', backgroundSize: "cover" }}>
              <header>
                <p style={{
                  color: 'black', backgroundColor: "white"
                }}>
                  #{item.id}
                </p>
                <p>Description:</p>
                <p style={{
                  color: 'black', backgroundColor: "white"
                }}>{item.alt_description ? item.alt_description : item.description}</p>
              </header>

              <footer>
                <p>
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                </p>
              </footer>
            </article>
          ))}
          {/* </animated.div> */}
        </div>
        <div className="item">
          {state.map((item, i) => (
            <article style={{ backgroundImage: 'url(' + item.urls.small + ')', backgroundSize: "cover" }}>
              <header>
                <p style={{
                  color: 'black', backgroundColor: "white"
                }}>
                  #{item.id}
                </p>
                <p>Description:</p>
                <p style={{
                  color: 'black', backgroundColor: "white"
                }}>{item.alt_description ? item.alt_description : item.description}</p>
              </header>

              <footer>
                <p>
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                  <MdStar className={styles.star} />
                </p>
              </footer>
            </article>
          ))}
          {/* </animated.div> */}
        </div>
      </div>
    )
  } else {
    return (<p>Loading...</p>)
  }
}
