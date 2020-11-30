import Clock from './Clock'
import Weather from './Weather'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Current Time in New York</h1>
        <Clock/>
        <Weather/>
      </header>
    </div>
  );
}

export default App;
