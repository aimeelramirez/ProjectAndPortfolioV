import "./App.css"
import SignInScreen from "./components/SignInScreen"
import { FiPackage } from "react-icons/fi";
import { MdDashboard, MdSearch } from "react-icons/md";

import { useState } from 'react'
import Socials from "./components/Socials"
import Favorites from "./components/Favorites"
function App() {
  const [toggle, setToggle] = useState(false)
  const handleSubmit = () => {
    if (!toggle) {
      setToggle(true)

    } else {
      setToggle(false)

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
  const ShowLogin = () => {
    if (!toggle) {
      return (
        <>
          <header className="App-header">
            <nav className="navigation-left" >
              <p>
                <button onClick={handleSubmit}>
                  Login
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
            <h1 style={{ color: 'white', fontSize: '5rem' }}><FiPackage /></h1>

          </p>
          <h2>Project and Portfolio.</h2>
          <p>Under construction.</p>
          <Favorites />
        </>
      )
    } else {
      return (
        <>
          <header className="App-header">
            <nav className="navigation-left" >
              <p>
                <button onClick={handleSubmit}>
                  {toggle ? "Close" : "Login"}
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
            <h1 style={{ color: 'white', fontSize: '5rem' }}><FiPackage /></h1>

          </p>
          <SignInScreen />
          <Socials />
        </>
      )
    }
  }
  return (<div className='App'>

    <ShowLogin />

  </div>

  )
}

export default App
