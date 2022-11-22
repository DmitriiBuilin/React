import './App.css';
import { Message } from './components/Message';
import { ChatList } from './components/ChatList';
import { Pages } from './components/Pages';

function App(item) {
  return (
    <div className="App">
      <Pages />
      <div className='Chats'>
        <ChatList />
        <Message item={item}/>
      </div>
    </div>
  );
}


export default App;
