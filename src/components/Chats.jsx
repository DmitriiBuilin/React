import React, { useEffect } from "react";
import { ChatList } from "./ChatList";
import { Message } from "./Message";
import './ChatList.css'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const NoChat = () => ( 
<> 
    <h2>Please select a chat</h2> 
    <ChatList/>      
</> 
)

export const Chat = () => { 
    const messages = useSelector(state => state.messages)
    const{ chatId } = useParams(); 
    const switchChat = useSelector(state => state.switchChat)

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
