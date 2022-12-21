import React, { useEffect } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { ChatList } from "../chatList/ChatList";
import { Chat } from "../chats/Chats";
import { Error } from "../error/Error";
import { Main } from "../main/Main";
import './Pages.css';
import { SignUp } from "../authorisation/signUp";
import { SignIn } from "../authorisation/signIn";
import { Api } from "../api/api";
import { ProfileIsLogin } from "../profile/ProfileIsLogin";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../store/actions/actions";
import { firbaseAuth } from '../../services/firebase'
import Profile from "../profile/Profile";


export const Pages = () => {
    const dispatch = useDispatch();
    const PrivateRoute = () => {
        const { isAuth } = useSelector((store) => store.profile)      
        if (!isAuth) {
          return <Navigate to="/profile/profile" />
        }      
        return <Navigate to="/profile/login" />
      }

    useEffect(() => {
      const unsubcribe = firbaseAuth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(auth(true))
        } else {
          dispatch(auth(false))
        }
      })  
      return unsubcribe
    }, [dispatch]);




    return (
        <>
                <BrowserRouter>
            <header>
                <ul className="linksButtons"> 
                    <li> 
                        <Link className="link" to="/">Home</Link> 
                    </li> 
                    <li> 
                        <Link className="link" to="/api">API</Link> 
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
                <Route path="/profile/signin" element={<SignIn />}> 
                </Route>
                <Route path="/profile/signup" element={<SignUp />}> 
                </Route>
                <Route path="/profile/login" element={<ProfileIsLogin />}> 
                </Route>
                <Route path="/profile/profile" element={<Profile />}> 
                </Route>
                <Route path="/profile" element={<PrivateRoute />}>
                </Route>
                <Route exact path="/api" element={<Api   /> } > 
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
        </>
        
    )
}
