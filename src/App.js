import logo from './logo.svg';
import './App.css';
import Form  from './components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* FORM COMPONENT  */}
        <Form instructor="Enrique" />
      </header>
    </div>
  );
}

export default App;
