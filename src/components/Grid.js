import React, { useState, useEffect } from "react"
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web"

import { MdStar } from "react-icons/md"
// import { data } from "../action/data"
import styles from "./../styles/styles.module.css"
import { FetchProductImages } from '../action/unsplash'

export default function Grid() {
  const [open, set] = useState(false)
  const springApi = useSpringRef()

  const [state, setState] = useState()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "#5863F8" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "transparent" : "#5863F8",
    },
  })
  useEffect(() => {
    FetchProductImages().then(res => {
      console.log(res.results)
      return setState(res.results)
    })
  }, [])

  const transApi = useSpringRef()


  const transition = useTransition(open ? state : [], {
    ref: transApi,
    trail: 400 / 10,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])


  console.log(state)


  // TODO get data to only show on authenicated links
  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, minWidth: '10rem', height: size, paddingBottom: '5rem' }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {!open ? <p className={styles.griddisplay}>Show Products</p> : open}
        {transition((style, item) => (
          <animated.div

            className={styles.item}
            style={{ ...style, backgroundImage: 'url(' + item.urls.small + ')', backgroundSize: "cover" }}
          >
            <article>
              <header>
                <p style={{
                  color: 'black', backgroundColor: "white", height: '100%'
                }}>
                  #{item.id}
                </p>
              </header>
              <p style={{
                color: 'black', backgroundColor: "white", height: '100%'
              }}>Description:</p>
              <p style={{
                color: 'black', backgroundColor: "white", height: '100%'
              }}>{item.alt_description ? item.alt_description : item.description}</p>
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
          </animated.div>
        ))}
      </animated.div>
    </div>
  )
}
