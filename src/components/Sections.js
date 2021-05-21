import { handleLogout } from "./SignInScreen"
// import Grid from "./Grid"
import Pages from "./Pages"
// import styles from './../styles/styles.module.css'
import rose from './../styles/images/rose.svg'
import roses from './../styles/images/roses.svg'
import flower from './../styles/images/flower.svg'
import forgetmenots from './../styles/images/forgetmenots.svg'
import leaves from './../styles/images/leaves.svg'
import React, { useRef } from "react"
import { ParallaxLayer } from "@react-spring/parallax"
// Something for learning as i go.
const Sections = () => {
  const parallax = useRef(0)
  return (
    <div>

      <Pages ref={parallax} pages={3}>
        <ParallaxLayer offset={1} speed={1} />
        <ParallaxLayer offset={2} speed={1} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
        /> <p>Please Scroll Down.</p>


        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img alt="design by Nsaeoosh: floral pack" src={flower} style={{ width: '15%', marginLeft: '70%' }} />
          <img alt="design by Nsaeoosh: floral pack" src={leaves} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img alt="design by Nsaeoosh: floral pack" src={roses} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img alt="design by Nsaeoosh: floral pack" src={leaves} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img alt="design by Nsaeoosh: floral pack" src={roses} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img alt="design by Nsaeoosh: floral pack" src={leaves} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img alt="design by Nsaeoosh: floral pack" src={roses} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img alt="design by Nsaeoosh: floral pack" src={roses} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img alt="design by Nsaeoosh: floral pack" src={leaves} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img alt="design by Nsaeoosh: floral pack" src={roses} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img alt="design by Nsaeoosh: floral pack" src={leaves} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img alt="design by Nsaeoosh: floral pack" src={roses} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img alt="design by Nsaeoosh: floral pack" src={roses} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img alt="design by Nsaeoosh: floral pack" src={leaves} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img alt="design by Nsaeoosh: floral pack" src={roses} style={{ width: '100%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: { leaves },
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img id="firstFlower" alt="design by Nsaeoosh: floral pack" src={forgetmenots} style={{ width: '50%' }} />

        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img alt="design by Nsaeoosh: floral pack" src={rose} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <section>
            <article>
              <h4>Signout as Guest:</h4>
              <img alt="design by Nsaeoosh: floral pack" src={rose} style={{ width: '100%' }} />
            </article>

            <article>
              <header>
                <p>Thanks for Reading!</p>

                <button onClick={() => handleLogout()}>Sign-out</button>
              </header>

            </article>
          </section>
        </ParallaxLayer>
      </Pages>
    </div>

  )
}
export default Sections
