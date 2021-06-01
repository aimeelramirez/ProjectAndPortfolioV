
import React, { useState, useCallback, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'
import styles from './../../styles/styles.module.css'
const Notify = (message) => {

    const pages = [
        ({ style }) => <animated.div id="page" style={{ ...style, background: 'lightpink' }}> {message}   <button onClick={onClick}>Close</button></animated.div>
    ]

    const [index, set] = useState(0)

    const [, setHide] = useState(false)
    useEffect(() => {
        document.getElementById('page').style.cssText = `display:none`
    }, [])
    const onClick = () => {
        setHide(true)
        document.getElementById('page').style.cssText = `display:none`
    }
    const onClickShow = () => {
        setHide(false)
        document.getElementById('page').style.cssText = `display:none`
    }
    const transRef = useSpringRef()
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(40%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })


    return (<div className={styles.notification}>
        {transitions((style, i) => {
            const Page = pages[i]
            return <><Page style={style} >

            </Page>
            </>
        })}
    </div>)
}
export default Notify