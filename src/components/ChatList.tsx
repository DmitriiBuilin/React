import React, { FC, useState, useEffect } from 'react'
import { List, ListItem, Button, TextField } from '@mui/material';
import { Chat } from '../types';
import { nanoid } from 'nanoid'


interface ChatListProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, onAddChat }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {e.preventDefault();
        console.log('Tamam')
        if(value) {
            onAddChat({
                id: nanoid(),
                name: value,
            })
            setValue('');
        }   
    };


    // const [ChatList] = useState([
    //     {
    //         name: 'Friend Chat',
    //         id: 'Friend',
    //     },
    //     {
    //         name: 'Happy Chat',
    //         id: 'Happy',
    //     },
    //     {
    //         name: 'Lucky Chat',
    //         id: 'Lucky',
    //     },
    // ]);

    // useEffect(() => {
    //     }, []
    // );

    return (
        <>
            <List className='list' component="nav" aria-label="mailbox folders">           
                {chats.map((chat) => 
                    (<ListItem key={chat.id}>
                            {chat.name}                   
                    </ListItem>
                    )
                )}
            </List>
            <form className='input-form container' onSubmit={handleSubmit}>
            <TextField className='input' id="outlined-basic" 
                label="Message" variant="outlined" value={value} onChange={(e) =>
                setValue(e.target.value)
                }
            />
            <Button variant="outlined"  className='button'>
                new chat
            </Button>
            </form>
        </>

        // <div className='chatList'>                       
        //    {ChatList.map(
        //         (item) => {
        //             return (
        //                 <div key={item.id}>
        //                     <List className='list' component="nav" aria-label="mailbox folders">
        //                         <ListItem button>
        //                         <ListItemText primary={item.name} />
        //                         </ListItem>
        //                         <Divider />
        //                     </List>
        //                 </div>
        //             )
        //         }
        //    )}
        // </div>
    );
};