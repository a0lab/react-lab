import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Parent from './components/Parent';
import UserGreeting from './components/UserGreeting';
import LoginGreeting from './components/LoginGreeting';
import Logout from './components/Logout';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <ItemList/>
      
      <hr></hr>
      <LoginGreeting/> <Logout />
      <UserGreeting/>
      <Parent />
      <FunctionClick />
      <ClassClick />
      <Counter/>
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
