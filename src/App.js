import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">

      <Counter/>
      <hr></hr>
      <Message />
      <Greet firstName="Jayaraman" lastName="Pancharathinam">
        This is Description of Greet Component
      </Greet>
      <Greet firstName="Seetharaman" lastName="Ramakrishnan">
        Text with Button <button>Subscribe</button>  
      </Greet>
      <Greet firstName="Gothandaraman" lastName="Venkatachalam"/>

      <Welcome firstName="Jayaraman" lastName="Pancharathinam"/>
      <Welcome firstName="Seetharaman" lastName="Ramakrishnan"/>
      <Welcome firstName="Gothandaraman" lastName="Venkatachalam"/>
    </div>
  );
}

export default App;
