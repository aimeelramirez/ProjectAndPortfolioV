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
import { data } from "../action/data"
import styles from "./../styles/styles.module.css"
// import { FetchProductImages } from '../action/unsplash'

export default function Favorites() {
    const [open, set] = useState(false)
    const springApi = useSpringRef()



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

    useEffect(() => {
        set(open => !open)
        return () => {
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            <animated.div
                style={{ ...rest, width: size, minWidth: '10rem', height: size }}
                className={styles.container}
            >
                {/* {!open ? <p className={styles.griddisplay} style={{ color: '#fff' }}>Favorites</p> : open} */}
                {transition((style, item) => (
                    <animated.div
                        id='cards'
                        className={styles.item}
                        style={{ ...style, backgroundImage: item.css }}
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
        </div >
    )
}