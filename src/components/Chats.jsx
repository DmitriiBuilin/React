import React, { useState } from "react";
import { ChatList } from "./ChatList";
import { Message } from "./Message";
import './ChatList.css'
import { useParams } from "react-router-dom";

const initialChats = { 
    friend: { 
        name:"Friend Chat", 
        MessageList: [{text:"FirstMessage", author: 'User'}], 
    }, 
    happy: { 
        name:"Happy Chat", 
        MessageList: [{text:"FirstMessageHereToo!", author: 'User' }], 
    }, 
    lucky: {}, 
};



export const NoChat = () => ( 
<> 
    <h2>Please select a chat</h2> 
    <ChatList/>     
</> 
)

export const Chat = () => { 
    const{ chatId } = useParams(); 
    const[chats, setChats] = useState(initialChats); 
    console.log(chatId)
    console.log(chats[chatId])
    // if(!chats[chatId]) { 
    //     return null;            
    // }
    return ( 
        <> 
            <div className="chatsField"> 
                <div> 
                    <ChatList chatId={chatId}/> 
                    {/* <ChatList chats={chats} chatId={chatId} />  */}
                </div> 
                <div> 
                    {/* <Message /> */}
                    <Message MessageList={chats[chatId].MessageList} /> 
                </div> 
            </div> 
        </>     
    ); 
}


