import './App.css';

const App = () => {
  const name = 'John Doe'
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello {name}
        </h1>
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
