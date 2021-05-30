import { useState, useEffect, useRef } from "react"
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web"
// import { MdStar } from "react-icons/md"
import { FaHeart } from "react-icons/fa";
import styles from "./../styles/styles.module.css"
import { FetchProductImages } from '../action/unsplash'
import Spinner from './Spinner/spinner'
import loadingPhoto from '../styles/images/loadingImage.svg'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default function Grid() {
  const [open, set] = useState(false)
  const springApi = useSpringRef()
  const [state, setState] = useState()
  let starRef = useRef()
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


  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%", backgroundColor: 'url(' + loadingPhoto + ')',
    },
    to: {
      size: open ? "100%" : "20%",
      backgroundImage: 'url(' + loadingPhoto + ')',
    },
  })
  console.log("results outside STATE:", state)

  const transApi = useSpringRef()
  const transition = useTransition(open ? state : [], {
    ref: transApi,
    trail: 400 / 30,
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
  const handleStars = (e) => {
    console.log(e)
    console.log(starRef)
    return starRef
  }

  if (state && state.length > 9) {
    return (
      <div id="wrapper">
        <animated.div
          style={{ ...rest, width: size, minWidth: '10rem', height: size }}
          className={styles.container}
        >
          {transition((style, item) => {
            if (item.urls.full) {
              //refactor to pass props
              return (<animated.div
                className={styles.item}
                style={{ ...style, backgroundImage: 'transparent' }}>
                <div className={styles.images} style={{
                  height: '100%', backgroundImage: 'url(' + item.urls.full + ')', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'top'
                }}
                  onClick={((e) => {
                    e.preventDefault()
                    let message = '404, You clicked: ' + item.alt_description;
                    alert(message)
                  })} >
                  <section>
                    <article>
                      <div className="card-description">
                        <p style={{ display: 'flex' }}>
                          <Rater total={5} rating={2} ref={starRef} onClick={handleStars} />
                        </p>

                        <header className="text" style={{
                          color: 'black'
                        }}>
                          <p>
                            #{item.id}
                          </p>
                          <p>Description:</p>
                          <p>{item.alt_description ? item.alt_description : item.description}</p>
                          <p style={{ float: 'right', color: 'red', fontSize: '20px', marginBottom: '3rem' }}><FaHeart /></p>

                        </header>

                      </div>

                    </article>

                  </section>

                </div>

              </animated.div>)
            } else {

              //refactor to pass props
              return (<animated.div
                className={styles.item}
                style={{ ...style, backgroundImage: 'transparent' }}>
                <div className={styles.images} style={{
                  height: '100%', backgroundImage: 'url(' + loadingPhoto + ')', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'top'
                }}
                  onClick={((e) => {
                    e.preventDefault()
                    let message = '404, You clicked: ' + item.alt_description;
                    alert(message)
                  })} >
                  <section>
                    <article>
                      <div className="card-description"><p style={{ display: 'flex' }}>
                        <Rater total={5} rating={2} ref={starRef} onClick={handleStars} />
                      </p>

                        <header className="text" style={{
                          color: 'black'
                        }}>
                          <p>
                            #{item.id}
                          </p>
                          <p>Description:</p>
                          <p>{item.alt_description ? item.alt_description : item.description}</p>
                          <p style={{ float: 'right', color: 'red', fontSize: '20px', marginBottom: '3rem' }}><FaHeart /></p>
                        </header>
                      </div>
                    </article>
                  </section>
                </div>
              </animated.div>)
            }
          })}
        </animated.div>
      </div >
    )
  }
  else {
    return (<Spinner />)
  }
}
