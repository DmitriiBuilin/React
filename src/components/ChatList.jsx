import { useState, useEffect } from 'react'
import './ChatList.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export const ChatList = () => {
    const [ChatList] = useState([
        {
            name: 'Friend Chat',
            id: 'Friend',
        },
        {
            name: 'Happy Chat',
            id: 'Happy',
        },
        {
            name: 'Lucky Chat',
            id: 'Lucky',
        },
    ]);


    useEffect(() => {
        }, []
    );

    return (
        <div className='chatList'>                       
           {ChatList.map(
                (item) => {
                    return (
                        <div key={item.id}>
                            <List className='list' component="nav" aria-label="mailbox folders">
                                <ListItem button>
                                <ListItemText primary={item.name} />
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