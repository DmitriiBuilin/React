import React, { useEffect } from "react";
import { ChatList } from "./ChatList";
import { Message } from "./Message";
import './ChatList.css'
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { getChatSwitcher, getMessagesList } from "../store/selectors/selectors";

export const NoChat = () => ( 
<>     
    <ChatList/>  
    <h2>Please select a chat</h2>     
</> 
)

export const Chat = () => { 
    const messages = useSelector(getMessagesList, shallowEqual)
    const{ chatId } = useParams(); 
    const switchChat = useSelector(getChatSwitcher)

    useEffect(() => {
       <Message />

    });

    if(chatId !== switchChat) {
        return <NoChat/>;            
    }
    else {
        // console.log(messages[selector]);
        return ( 
            <> 
                <div className="chatsField"> 
                    <div> 
                        <ChatList /> 
                    </div> 
                    <div> 
                        {/* <Message />  */}
                        <Message Messages={messages[switchChat]} /> 
                    </div> 
                </div> 
            </>     
        ); 
    }
}

export default Chat;
