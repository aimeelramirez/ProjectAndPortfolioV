import { HandleLogout } from "./../Config/config";
// import Grid from "./Grid"
import Pages from "./Pages";
import { Redirect, Link } from "react-router-dom";

// import styles from './../styles/styles.module.css'
import rose from "./../../styles/images/rose.svg";
import roses from "./../../styles/images/roses.svg";
import flower from "./../../styles/images/flower.svg";
import forgetmenots from "./../../styles/images/forgetmenots.svg";
import leaves from "./../../styles/images/leaves.svg";
import React, { useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Timeline from './Timeline'
// Something for learning as i go.
const Sections = () => {
  const parallax = useRef(0);
  return (
    <div>
      <Redirect from="/auth" to="/guest" />
      <Link to="/guest">
        <Pages ref={parallax} pages={6}>
          <ParallaxLayer offset={1} speed={1} />
          <ParallaxLayer offset={2} speed={1} />
          <ParallaxLayer offset={0} speed={0} factor={3} />
          <p>Please Scroll Down.</p>
          <Timeline />
          <img
            alt="design by Nsaeoosh: floral pack"
            src={roses}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />

          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              alt="design by Nsaeoosh: floral pack"
              src={flower}
              style={{ width: "15%", marginLeft: "70%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={leaves}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={leaves}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.2 }}>
            <img
              alt="design by Nsaeoosh: floral pack"
              src={leaves}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.3 }}>
            <img
              alt="design by Nsaeoosh: floral pack"
              src={leaves}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0.5} speed={-0.1} style={{ opacity: 0.3 }}>
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={leaves}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.3 }}>
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={leaves}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={leaves}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              alt="design by Nsaeoosh: floral pack"
              src={rose}
              style={{
                display: "block",
                width: "50%",
                marginLeft: "45%",
                transform: "rotate(340deg)",
              }}
            />
            <img
              alt="design by Nsaeoosh: floral pack"
              src={leaves}
              style={{ display: "block", width: "30%", marginLeft: "30%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <img
              alt="design by Nsaeoosh: floral pack"
              src={roses}
              style={{ width: "100%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              margin: "1rem",

              backgroundImage: { leaves },
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              id="firstFlower"
              alt="design by Nsaeoosh: floral pack"
              src={forgetmenots}
              style={{ width: "50%" }}
            />
            <div className="greetings">
              <div className="text">
                <h4> Project and Portfolio</h4>
                <p>Learning and educational purposes </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "3rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              id="secondFlower"
              alt="design by Nsaeoosh: floral pack"
              src={rose}
              style={{ width: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "3rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <section
              style={{
                fontSize: ".2rem",
                margin: "3rem",
              }}
            >
              <header>
                <div className="greetings">
                  <div className="text">
                    <h4>Contact:</h4>
                    <>Contact Information</>
                    {/* TODO fix the contacts and info page */}
                    <p>email@mail.com</p>
                    <p>1(234)567-8910</p>
                    <p>Thanks for reading!</p>
                    <p className="greetings">
                      <span className="text">Sign-Out as Guest: </span>{" "}
                    </p>
                    <button onClick={() => HandleLogout()}>Sign-out</button>
                  </div>
                </div>
                <img
                  alt="design by Nsaeoosh: floral pack"
                  src={rose}
                  style={{ width: "100%", opacity: 0.6 }}
                />
              </header>
            </section>
          </ParallaxLayer>
        </Pages>
      </Link>
    </div>
  );
};
export default Sections;
