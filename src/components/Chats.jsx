import React, { useEffect, useState } from "react";
import { ChatList } from "./ChatList";
import { Message } from "./Message";
import './ChatList.css'
import { useParams } from "react-router-dom";

const initialChats = { 
    friend: { 
        name:"Friend Chat",
        id: 'friend', 
        MessageList: [{text:"First Message", author: 'User'}], 
    }, 
    happy: { 
        name:"Happy Chat",
        id: 'happy',
        MessageList: [
            { text:"First Message!", author: 'User Name' },
            { text:"Second Message Here Too!", author: 'Bot James' }
        ], 
    }, 
    lucky: {
        name:"Lucky Chat", 
        id: 'lucky',
        MessageList: [],
    }, 
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
    console.log(chatId)
    console.log(chats)
    console.log(chats[chatId].MessageList)
    console.log(chats[chatId])

    useEffect(() => {
        
    });


    if(!chats[chatId]) { 
        return (       
        console.log('Error') 
        )   
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

export default Chat;
