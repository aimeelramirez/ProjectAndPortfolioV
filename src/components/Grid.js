import React, { useState } from "react"
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web"

import { MdStar } from "react-icons/md"
import { data } from "../action/data"
import styles from "./../styles/styles.module.css"

export default function Grid() {
  const [open, set] = useState(false)

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "#5863F8" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "#282c34" : "#5863F8",
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  // TODO get data to only show on authenicated links
  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, minWidth: '10rem', height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {!open ? <p className={styles.griddisplay}>Click</p> : open}
        {transition((style, item) => (
          <animated.div
            id='cards'
            className={styles.item}
            style={{ ...style, background: item.css }}
          >
            <article>
              <header>
                <p>
                  {item.product} #{item.id}
                </p>
              </header>
              <p>Description:</p>
              <p>{item.name}</p>
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
