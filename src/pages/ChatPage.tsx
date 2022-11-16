import React, { FC } from "react"
import { Form, useParams } from "react-router-dom";
import { ChatList } from "../components";
import { MessageList } from "../components/MessageList/MessageList"
import { Chat, Message, Messages } from "../types";


interface ChatPageProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    messages: Messages[];
    onAddMessages: (msg: Message) => void;
}

export const ChatPage: FC<ChatPageProps> = ({ 
    chats, 
    onAddChat, 
    messages, 
    onAddMessages 
}) => {
    const { chatId } = useParams();
    return <>
        <ChatList chats={chats} onAddChat={onAddChat}/>
        <MessageList messages={[]} />
        <Form AddMessages={onAddMessages}/>
    </>
}