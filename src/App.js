import "./App.css";
import SignInScreen from "./components/SignInScreen";
import { FiPackage } from "react-icons/fi";
import { MdDashboard, MdSearch } from "react-icons/md";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import Socials from "./components/Socials/socials.js";
// import Favorites from "./components/boardfeed"
import Sections from "./components/Guest/Sections";
import Grid from "./components/Grid";
import Spinner from "./components/Spinner/spinner";
// import Dashboard from "./components/Dashboard";
import Modal from "./components/Modal/Modal";
import styles from "./styles/styles.module.css";
import Navigation from "./components/Navigation/Navigation.tsx";
import { FiHome, FiHeart, FiTruck, FiEdit, FiSettings } from "react-icons/fi";
import history from "./history";

function App() {
  const [toggle, setToggle] = useState(false);
  const [stateModal, setStateModal] = useState({
    show: false,
  });
  let arrayIcons = {
    icons: [
      <FiHome />,
      <FiHeart />,
      <FiTruck />,
      <FiEdit />,
      <FiSettings />,
    ],
    names: [
      'Home',
      'Favorites',
      'Orders',
      'Edit',
      'Settings'
    ]
  }
  // const showModal = () => {
  //   setStateModal({ show: true });

  // };
  const hideModal = () => {
    // let message = "Disregarded for edits.";
    setStateModal({ show: false });
    history.push(window.location.hash, "/boardfeed")

  };

  const Dashboard = () => {
    return (
      <div>
        <Link to="/dashboard">
          <Modal show={stateModal.show}>

            <form>
              <div id="buttons-modal">
                <span className={styles.modalClose} onClick={hideModal}>
                  <p>
                    <span>Close</span>
                  </p>
                </span>
              </div>

              <div id="modal-message">
                <h5
                  style={{
                    textDecoration: "underline",
                    fontWeight: "700",
                    fontSize: "1.rem",
                    textAlign: 'center'
                  }}
                >
                  Dashboard:
                </h5>
                {/* Moving this to best see the push history */}
                {arrayIcons.icons.map((item, i) => {
                  return (
                    <Navigation>
                      <Link to="/boardfeed">
                        <p
                          onClick={() => {
                            alert("404, under construction.");
                            return (
                              hideModal()
                            );
                          }}
                        >

                          <span style={{ paddingRight: '0.5rem' }}>{item}</span>
                          {arrayIcons.names[i]}
                        </p>
                      </Link>
                    </Navigation>
                  );
                })}
              </div>
            </form>
          </Modal>
        </Link>
      </div>
    );
  };

  const handleSubmit = () => {
    if (toggle) {
      history.push(window.location.hash, "/auth");
      setToggle(false);
    } else {
      history.push(window.location.hash, "/boardfeed");
      setToggle(true);
    }
  };

  const ShowSearch = (e) => {
    e.preventDefault();
    alert("Under Construction");
    // return(

    // )
  };

  const ShowAuth = () => {
    return (
      <>
        <Redirect from="/boardfeed" to="/auth" />

        <header className="App-header">
          <nav className="navigation-left">
            <p>
              <button onClick={handleSubmit}>
                {toggle ? "Sign-In" : "Favorites"}
              </button>
            </p>
            <p>
              <form>
                <label for="site-search">Search the site:</label>
                <input
                  type="search"
                  id="site-search"
                  aria-label="Search through site content"
                />
                <button onClick={ShowSearch}>
                  <MdSearch />
                </button>
              </form>
            </p>
            <p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStateModal({ show: true });
                }}
              >
                <MdDashboard />
              </button>
            </p>
          </nav>
        </header>
        <p>
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#dcc48eff" offset="0%" />
              <stop stopColor="#eaefd3ff" offset="100%" />
            </linearGradient>
          </svg>
          <h1>
            <FiPackage style={{ stroke: "url(#blue-gradient)" }} />
          </h1>
        </p>
        {SignInScreen ? <SignInScreen /> : <Spinner />}
      </>
    );
  };
  const ShowFavs = () => {
    return (
      <>
        <Redirect from="/auth" to="/boardfeed" />

        <header className="App-header">
          <nav className="navigation-left">
            <p>
              <button onClick={handleSubmit}>
                {toggle ? "Sign-In" : "Favorites"}
              </button>
            </p>
            <p>
              <form>
                <label htmlFor="site-search">Search the site:</label>
                <input
                  type="search"
                  id="site-search"
                  // name="q"
                  aria-label="Search through site content"
                />

                <button onClick={ShowSearch}>
                  <MdSearch />
                </button>
              </form>
            </p>
            <p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStateModal({ show: true });
                }}
              >
                <MdDashboard />
              </button>
            </p>
          </nav>
        </header>
        <p>
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <linearGradient
                id="blue-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#dcc48eff" offset="0%" />
                <stop stopColor="#eaefd3ff" offset="100%" />
              </linearGradient>
            </linearGradient>
          </svg>
          <h1>
            <FiPackage style={{ stroke: "url(#blue-gradient)" }} />
          </h1>
        </p>
        <h2>Board:</h2>
        <section id="grid">
          {/* Example of typescript with animation on grid with react js */}
          {Grid ? <Grid /> : <Spinner />}
        </section>
      </>
    );
  };
  const ShowLogin = () => {
    if (toggle) {
      return (
        <>
          <Link to="/boardfeed">
            <Dashboard />
            <ShowFavs />
          </Link>
        </>
      );
    } else if (!toggle) {
      return (
        <>
          <Link to="/auth">
            <Dashboard />
            <ShowAuth />
          </Link>
          <div className="app-container">
            <Socials />
          </div>
        </>
      );
    }
  };
  return (
    <div className="App">
      <ShowLogin />
      <Switch>
        <Redirect from="/" to="/auth" />
        <Route exact path="/auth" component={ShowAuth} />
        <Route exact path="/boardfeed" component={ShowFavs} />
        <Route exact path="/guest" component={Sections} />
        <Route path="/loggedin" component={SignInScreen} />
      </Switch>
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
