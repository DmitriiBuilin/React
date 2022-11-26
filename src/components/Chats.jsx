import React, { useState } from "react";
import { ChatList } from "./ChatList";
import { Message } from "./Message";
import './ChatList.css'
import { useParams } from "react-router-dom";

const initialChats = { 
    friend: { 
        name:"Friend Chat", 
        MessageList: [{text:"First Message", author: 'User'}], 
    }, 
    happy: { 
        name:"Happy Chat", 
        MessageList: [
            {text:"Second Message", author: 'User'},
            {text:"Reply", author: 'Bot James'}
        ],
    }, 
    lucky: {name:"Happy Chat", 
    MessageList: [],}, 
};



export const NoChat = () => ( 
<> 
    <h2>Please select a chat</h2> 
    <ChatList/>     
</> 
)

export const Chat = () => { 
    const{ chatId } = useParams(); 
    const[chats] = useState(initialChats); 

    if(!chats[chatId]) { 
        return <NoChat/>;            
    }
    else {
        return ( 
            <> 
                <div className="chatsField"> 
                    <div> 
                        <ChatList chatId={chatId}/> 
                    </div> 
                    <div> 
                        <Message Messages={chats[chatId].MessageList} /> 
                    </div> 
                </div> 
            </>     
        ); 
    }
}


