import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './Pages.css';

export const Pages= () => {
    return (
        <BrowserRouter>
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
            
            <Routes> 
                <Route path="/profile"> 
                    {/* <Profile/>  */}
                </Route> 
                <Route exact path="/chats" > 
                    {/* <Chats/>  */}
                </Route> 
                <Route exactpath="/"> 
                    {/* <Home/>  */}
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}
