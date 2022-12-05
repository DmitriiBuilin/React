import { useState } from 'react'
import './ChatList.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ChatList = () => {
    const chats = useSelector(state => state.chatList)
    const [ChatList] = useState(chats); 


    return (
        <div className='chatList'>                       
           {ChatList.map(
                (item) => {
                    console.log(item);
                    return (
                        <div key={item.id}>
                            <List className='list' component="nav" aria-label="mailbox folders">                                
                                <ListItem id={item.id} button>
                                    <Link to={`/chats/${item.id}`} >
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