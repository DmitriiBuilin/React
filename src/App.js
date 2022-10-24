import './App.css';
import {Message} from './components/Message';

const text = 'Eligendi exercitationem non aliquam repellat temporibus, \
  excepturi culpa maxime, sapiente debitis esse nesciunt error!'

function App() {
  return (
    <div className="App">
      <h1 className='page-header'>Message text:</h1>
      <Message text={text}/>
    </div>
  );
}


export default App;
