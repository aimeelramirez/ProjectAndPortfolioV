// import React, { useState, useEffect } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { handleLogout } from "./SignInScreen"
// Get the images to the grid to save in the data to show on load as a component to reuse
export default function Images() {
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Scroll down</p>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: "#ff6d6d" }}
      />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
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
    </Parallax>
  )
}
