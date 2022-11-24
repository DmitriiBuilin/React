import { useState } from 'react'
import './ChatList.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';


export const ChatList = () => {
    const [ChatList] = useState([
        {
            name: 'Friend Chat',
            id: 'friend',
            MessageList: [{text:"FirstMessage", author: 'User'}],
        },
        {
            name: 'Happy Chat',
            id: 'happy',
            MessageList: [],
        },
        {
            name: 'Lucky Chat',
            id: 'lucky',
            MessageList: [],
        },
    ]);


    return (
        <div className='chatList'>                       
           {ChatList.map(
                (item) => {
                    return (
                        <div key={item.id}>
                            <List className='list' component="nav" aria-label="mailbox folders">                                
                                <ListItem button>
                                    <Link to={`/chats/${item.id}`}>
                                    <ListItemText primary={item.name} />
                                    </Link>
                                </ListItem>                                
                                <Divider />
                            </List>
                        </div>
                    )
                }
           )}
        </div>
    );
}