import './App.css';

import Profile from './components/Profile'
import Navigation from './components/navigation'
import LoginButton from './components/LoginButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <LoginButton />
        <br />
        <Profile />
      </header>
    </div>
  );
}

export default App;
