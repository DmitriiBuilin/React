import React from "react";
import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList";
import { Main } from './pages/Main'
import { Profile } from "./pages/Profile";
import { Chat } from "./types";
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
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chats">
        <Route index element={<ChatList chats={chats}/>}/>
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