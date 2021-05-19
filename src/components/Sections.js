import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { handleLogout } from "./SignInScreen"
import Grid from "./Grid"
import Pages from "./Pages"
import styles from './../styles/styles.module.css'

const Sections = () => {
  return (
    <Pages pages={3}>
      <ParallaxLayer offset={0} speed={0.2}>
        <p>Please Scroll Down</p>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1} >
        <p>Keep Going!</p>
        {/* <img src="https://pbs.twimg.com/profile_images/1360226585035632645/8Ui-iEtX_400x400.jpg" style={{ float: 'right' }}></img> */}
      </ParallaxLayer>

      <ParallaxLayer style={{ backgroundColor: '#282c34ff' }} offset={2} speed={0.3}>

        <section>
          <article>
            <header>
              <h2>Signout as Guest:</h2>
              <button onClick={() => handleLogout()}>Sign-out</button>
            </header>
            <hr />
            <p>Or</p>
            <p>Scroll up</p>
          </article>
        </section>
      </ParallaxLayer>
    </Pages >
  )
}
export default Sections
