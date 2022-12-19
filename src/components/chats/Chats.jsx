import React, { useEffect } from "react";
import { ChatList } from "../chatList/ChatList";
import { Message } from "../message/Message";
import '../chatList/ChatList.css'
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { getChatSwitcher, getMessagesList } from "../../store/selectors/selectors";

export const NoChat = () => ( 
<>     
    <ChatList/>  
    <h2>Please select a chat</h2>     
</> 
)

export const Chat = () => { 
    const switchChat = useSelector(getChatSwitcher)
    const messages = useSelector(getMessagesList, shallowEqual)
    const { chatId } = useParams(); 

    useEffect(() => {
       <Message />
    });

    if(chatId !== switchChat) {
        return <NoChat/>;            
    }
    else {
        return ( 
            <> 
                <div className="chatsField"> 
                    <div> 
                        <ChatList /> 
                    </div> 
                    <div> 
                        <Message Messages={messages[switchChat]} /> 
                    </div> 
                </div> 
            </>     
        ); 
    }
}

export default Chat;
