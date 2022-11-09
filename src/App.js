import './App.css';
import { Message } from './components/Message';
import { ChatList } from './components/ChatList';

function App(item) {
  return (
    <div className="App">
      <ChatList />
      <Message item={item}/>

    </div>
  );
}


export default App;
