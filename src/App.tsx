import React from "react";
import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList";
import { ChatPage } from "./pages/ChatPage";
import { Main } from './pages/Main'
import { Profile } from "./pages/Profile";
import { Chat } from "./types";
import { Messages } from "./types";
// import './App.css';
// import { Message } from './components/Message';

const defaultChats: Chat[] = [
  {
      name: 'Friend Chat',
      id: 'Friend',
  },
  {
      name: 'Happy Chat',
      id: 'Happy',
  },
  {
      name: 'Lucky Chat',
      id: 'Lucky',
  },
];

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messages, setMessages] = useState<Messages[]>([]);
  const onAddChat = (newChat: Chat) => {
    setChats([
      ...chats,
      newChat,
    ]);
  };
  const onAddMassage = () => {

  };

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chats">
        <Route index element={<ChatList chats={chats} onAddChat={onAddChat}/>}/>
        <Route path=":chatId" element={<ChatPage chats={chats} onAddChat={onAddChat} messages={massages} onAddMassage={onAddMassage}/>}/>
      </Route>
    </Routes>  
  );
};

// function App(item) {
//   return (
//     <div className="App">
//       <ChatList />
//       <Message item={item}/>

//     </div>
//   );
// }

export default App;