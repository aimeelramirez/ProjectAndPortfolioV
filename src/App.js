import './App.css';
import SignInScreen from './SignInScreen'
import Navigation from './components/navigation'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignInScreen />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
