import logo from './logo.svg';
import './App.css';
import Form  from './components/Form'
import WelcomeFunctional from './components/WelcomeFunctional';
import WelcomeClass from './components/WelcomeClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* FORM COMPONENT  */}
        <Form instructor="Enrique" />

        {/* CLASS VS FUNCTIONAL COMPONENTS  */}
        <WelcomeFunctional name="Susi"/>
        <WelcomeClass name="Vinay"/>
      </header>
    </div>
  );
}

export default App;
