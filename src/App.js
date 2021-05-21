import './App.css';
import SignInScreen from './components/SignInScreen'
import { FiPackage } from "react-icons/fi";
import Socials from "./components/Socials"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><FiPackage /></h1>
      </header>
      <SignInScreen />
      <Socials />


    </div>
  );
}

export default App;
