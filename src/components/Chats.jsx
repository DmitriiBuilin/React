import React, { useEffect, useState } from "react";
import { ChatList } from "./ChatList";
import { Message } from "./Message";
import './ChatList.css'
import { useParams } from "react-router-dom";

const initialChats = { 
    friend: { 
<<<<<<< HEAD
        name:"Friend Chat", 
        MessageList: [{text:"First Message", author: 'User'}], 
    }, 
    happy: { 
        name:"Happy Chat", 
        MessageList: [
            {text:"Second Message", author: 'User'},
            {text:"Reply", author: 'Bot James'}
        ],
=======
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
>>>>>>> les4.1
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
<<<<<<< HEAD
    const[chats] = useState(initialChats); 

    if(!chats[chatId]) { 
        return <NoChat/>;            
=======
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
>>>>>>> les4.1
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
<<<<<<< HEAD
}
=======
>>>>>>> les4.1

}

export default Chat;
