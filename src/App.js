import './App.css';
import SignInScreen from './components/SignInScreen'
import { FiPackage } from "react-icons/fi";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><FiPackage /></h1>
      </header>
      <SignInScreen />


    </div>
  );
}

export default App;
