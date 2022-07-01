import logo from './logo.svg';
import './App.css';
import Clock from './components/pure/Clock';
import ClockF from './components/pure/ClockF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Clock>

        </Clock> */}
        <ClockF></ClockF>
      </header>
    </div>
  );
}

export default App;
