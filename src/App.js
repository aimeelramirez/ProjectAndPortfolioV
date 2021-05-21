import './App.css';
import SignInScreen from './components/SignInScreen'
import Socials from "./components/Socials"
import { FiPackage } from "react-icons/fi";
import { GrInstall } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><FiPackage />
          <GrInstall /></h1>
      </header>
      <SignInScreen />
      <Socials />


    </div>
  );
}

export default App;
