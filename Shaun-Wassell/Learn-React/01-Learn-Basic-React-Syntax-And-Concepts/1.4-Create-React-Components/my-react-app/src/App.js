import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import GreetingMultiline from './GreetingMultiline';
import GreetingFragment from './GreetingFragment';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*  <Greeting/> */}
        <Greeting/> 
        <GreetingMultiline />
        <GreetingFragment/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
