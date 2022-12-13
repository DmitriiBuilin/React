import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ChatList } from "../chatList/ChatList";
import { Chat } from "../chats/Chats";
import { Error } from "../error/Error";
import { Main } from "../main/Main";
import './Pages.css';
import { Profile } from "../profile/Profile";


export const Pages = () => {
    return (
        <BrowserRouter>
            <header>
                <ul className="linksButtons"> 
                    <li> 
                        <Link className="link" to="/">Home</Link> 
                    </li> 
                    <li> 
                        <Link className="link" to="/profile">Profile</Link> 
                    </li> 
                    <li> 
                        <Link className="link" to="/chats">Chats</Link> 
                    </li> 
                </ul> 
            </header>
            
            <Routes> 
                <Route path="/profile" element={<Profile />}> 
                </Route> 
                <Route exact path="/chats" element={<ChatList /> } > 
                </Route> 
                <Route exact path="/chats/:chatId" element={<Chat /> }> 
                </Route> 
                <Route exact path="/" element={<Main /> } errorElement={<Error />}> 
                </Route>
                <Route path="*" errorElement={<Error />}> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
