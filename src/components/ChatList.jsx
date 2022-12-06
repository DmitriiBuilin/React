import { useState } from 'react'
import './ChatList.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ADDCHAT } from '../store/actions/actions';

export const ChatList = () => {
    const chats = useSelector(state => state.chatList)
    const [ChatList] = useState(chats); 
    const { chatId } = useParams(); 
    const dispatch = useDispatch();

    const chatSwitcher = (value) => {
        dispatch({type: 'CHATSELECTOR', payload: value});        
    };

    return (
        <div className='chatList'>                       
           {ChatList.map(
                (item) => {
                    return (
                        <>
                        <div key={item.id}>
                            <List className='list' component="nav" aria-label="mailbox folders">                                
                                <ListItem id={item.id} button onClick={() => {chatSwitcher(chatId)}}>
                                    <Link to={`/chats/${item.id}`} >
                                    <ListItemText primary={item.name} />
                                    </Link>
                                </ListItem>                                
                                <Divider />
                            </List>
                        </div>
                        </>
                    )
                }
           )}
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => {dispatch(ADDCHAT)}}>Add chat</Button>
                <Button>Remove chat</Button>
            </ButtonGroup>
            </div>
        </div>
    );
}