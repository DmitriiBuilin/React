import './App.css';
import {Message} from './components/Message';

function App(item) {
  return (
    <div className="App">
      <Message item={item}/>
    </div>
  );
}


export default App;
