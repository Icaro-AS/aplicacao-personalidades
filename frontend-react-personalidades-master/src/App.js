import logo from './logo.svg';
import golang from './logo-go.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={golang} className="App-logo" alt="logo" />
        <h1>
          Personalidades
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
