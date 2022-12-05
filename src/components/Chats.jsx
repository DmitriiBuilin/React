import React, { useEffect, useState } from "react";
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
    const initialChats = useSelector(state => state.chatList)

    const{ chatId } = useParams(); 
    const[chats] = useState(initialChats); 

    useEffect(() => {
       <Message />

    });

    if(!chatId) { 
        return <NoChat/>;            
    }
    else {
        // console.log(chats[chatId].id);
        console.log(initialChats);
        console.log(chats);
        console.log(chatId);

        // dispatch(ONCLICKCHAT, chatId);
        return ( 
            <> 
                <div className="chatsField"> 
                    <div> 
                        <ChatList /> 
                    </div> 
                    <div> 
                        <Message Messages={chats[1].MessageList} /> 
                    </div> 
                </div> 
            </>     
        ); 
    }
}

export default Chat;
