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
import styles from "./../styles/styles.module.css"
import { FetchProductImages } from '../action/unsplash'

export default function Grid() {
  const [open, set] = useState(false)
  const springApi = useSpringRef()


  const [state, setState] = useState()

  useEffect(() => {
    const getApi = async () => {
      await FetchProductImages().then(res => {
        console.log(res.results)
        if (res.results !== "")
          setState(res.results)
      })
    }
    getApi()

  }, [])

  // const [state1, setState1] = useState()
  // const [state2, setState2] = useState()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%", backgroundColor: "transparent",
    },
    to: {
      size: open ? "100%" : "20%",
      backgroundImage: open ? "tranparent" : "transparent",
    },
  })
  console.log("results outside STATE:", state)

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

  useEffect(() => {
    return set(open => !open)

  }, [])




  // useEffect(() => {
  //   FetchProductImages1().then(res => {
  //     console.log(res.results)
  //     if (res.results != "") {
  //       return setState1(res.results)
  //     } else {
  //       return <p>Loading...</p>
  //     }
  //   })

  // }, [])


  // TODO get data to only show on authenicated links
  if (state) {
    return (
      <div id="wrapper" style={{ height: '30rem' }}>


        <animated.div
          style={{ ...rest, width: size, minWidth: '10rem', height: size }}
          className={styles.container}
        >
          {transition((style, item) => (
            <animated.div
              id='cards'
              className={styles.item}
              style={{ ...style, backgroundImage: item.css }}
            >
              <div className={styles.item}>
                <section>
                  <article style={{ backgroundImage: 'url(' + item.urls.full + ')', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "left" }}>
                    <div className="card-description"><p style={{ display: 'flex' }}>
                      <MdStar className={styles.star} />
                      <MdStar className={styles.star} />
                      <MdStar className={styles.star} />
                      <MdStar className={styles.star} />
                      <MdStar className={styles.star} />
                    </p>

                      <header className="text" style={{
                        color: 'black'
                      }}>
                        <p>
                          #{item.id}
                        </p>
                        <p>Description:</p>
                        <p>{item.alt_description ? item.alt_description : item.description}</p>
                      </header>


                    </div>

                  </article>

                </section>

              </div >

            </animated.div>
          ))}
        </animated.div>

      </div >
    )
  }
  else {
    return (<p>Loading...</p>)
  }
}
