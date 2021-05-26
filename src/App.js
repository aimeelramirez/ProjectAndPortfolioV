import "./App.css"
import SignInScreen from "./components/SignInScreen"
import { FiPackage } from "react-icons/fi";
import { MdDashboard, MdSearch } from "react-icons/md";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { useState } from 'react'
import Socials from "./components/Socials/socials.js";
// import Favorites from "./components/Favorites"
import Sections from './components/Guest/Sections'
import Grid from './components/Grid'
import Spinner from './components/Spinner/spinner'
function App() {
  const [toggle, setToggle] = useState(false)
  const handleSubmit = () => {
    if (toggle) {
      console.log("not")
      setToggle(false)

    } else {
      setToggle(true)

    }
  }
  const ShowDashboard = (e) => {
    e.preventDefault()
    alert("Under Construction")
    // return(

    // )
  }
  const ShowSearch = (e) => {
    e.preventDefault()
    alert("Under Construction")
    // return(

    // )
  }
  const ShowAuth = () => {
    return (
      <>
        <Redirect from="/favorites" to="/auth" />
        <header className="App-header">
          <nav className="navigation-left" >
            <p>
              <button onClick={handleSubmit}>
                {toggle ? "Sign-In" : "Favorites"}
              </button>
            </p>
            <p>
              <form>
                <label for="site-search">Search the site:</label>
                <input type="search" id="site-search"
                  aria-label="Search through site content" />
                <button onClick={ShowSearch}>
                  <MdSearch />
                </button>
              </form>
            </p>
            <p>
              <button onClick={ShowDashboard}>
                <MdDashboard />
              </button>
            </p>
          </nav>
        </header>
        <p>
          <svg width="0" height="0">
            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#16bac5ff" offset="0%" />
              <stop stopColor="#5863f8ff" offset="100%" />
            </linearGradient>
          </svg>
          <h1><FiPackage style={{ stroke: "url(#blue-gradient)" }} /></h1>

        </p>
        {SignInScreen ? <SignInScreen /> : <Spinner />}
      </>

    )
  }
  const ShowFavs = () => {
    return (<>
      <Redirect from="/auth" to="/favorites" />
      <header className="App-header">
        <nav className="navigation-left" >
          <p>
            <button onClick={handleSubmit}>
              {toggle ? "Sign-In" : "Favorites"}
            </button>
          </p>
          <p>
            <form>
              <label for="site-search">Search the site:</label>
              <input type="search" id="site-search"
                // name="q"
                aria-label="Search through site content" />

              <button onClick={ShowSearch}>
                <MdSearch />
              </button>
            </form>
          </p>
          <p>
            <button onClick={ShowDashboard}>
              <MdDashboard />
            </button>
          </p>
        </nav>
      </header>
      <p>
        <svg width="0" height="0">
          <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#16bac5ff" offset="0%" />
            <stop stopColor="#5863f8ff" offset="100%" />
          </linearGradient>
        </svg>
        <h1 ><FiPackage style={{ stroke: "url(#blue-gradient)" }} /></h1>

      </p>
      <h2>Favorites</h2>
      <section id="grid">
        {/* Example of typescript with animation on grid with react js */}
        {Grid ? <Grid /> : <Spinner />}
      </section>
    </>)
  }
  const ShowLogin = () => {
    if (toggle) {
      return (
        <>
          <Link to="/favorites">
            <ShowFavs />
          </Link>

        </>
      )
    } else if (!toggle) {
      return (
        <>
          <Link to="/auth">
            <ShowAuth />
          </Link>
          <div className="app-container">

            <Socials />
          </div>
        </>
      )
    }
  }
  return (<div className='App'>
    <ShowLogin />
    <Switch>
      <Redirect from="/" to="/auth" />
      <Route exact path="/favorites" component={ShowFavs} />
      <Route exact path="/auth" component={ShowAuth} />
      <Route exact path="/guest" component={Sections} />
      <Route path="/loggedin" component={SignInScreen} />

    </Switch>

  </div>

  )
}

export default App
