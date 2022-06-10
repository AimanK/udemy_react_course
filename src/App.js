
import './App.css';
import ButtonClick from './ButtonClick';
import Message from './Message';

const name = "Aiman Kayad";
//const element = <h1>Hello, {name}</h1>

function Welcome(props)
{
  return <h1>Hello, {props.name || 'Aiman'}</h1>
}

function App() {
  return (
    <div className="App">
     <Message />
    </div>
  );
}

export default App;
