import { useState } from 'react'
import './ChatList.css'
import ListItem from '@mui/material/ListItem';
import { Link, useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { addChat, addEmptyValue, delChat } from '../../store/actions/actions';
import { Dialog, DialogTitle, TextField } from '@mui/material';
import { getChatList, getMessagesList } from '../../store/selectors/selectors';

export const ChatList = () => {

    const chats = useSelector(getChatList, shallowEqual)
    const messageList = useSelector (getMessagesList)
    const { chatId } = useParams(); 
    const dispatch = useDispatch();
    const chatSwitcher = (value) => {
        dispatch({type: 'CHATSELECTOR', payload: value});        
    };
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");
    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
        dispatch(addChat(newChatName));
        dispatch(addEmptyValue(Object.keys(messageList).length))
        setNewChatName("");
        handleClose();
    };
    const removeChat = () => {
        dispatch(delChat(chatId))
    }

    return (
        <>
            <div>
                {Object.keys(chats).map((id, i) => (
                    <div key={i}>
                        <ListItem button onClick={() => {chatSwitcher(chatId)}}>
                            <Link to={`/chats/${id}`}>
                                <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                                    {chats[id].name}
                                </b>
                            </Link>
                        </ListItem>
                     </div>
                ))}
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={handleOpen}>Add chat</Button>
                    <Button onClick={removeChat}>Del chat</Button>
                </ButtonGroup>
            </div>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Please enter a name for new chat</DialogTitle>
                <TextField value={newChatName} onChange={handleChange} />
                <Button onClick={onAddChat} disabled={!newChatName}>
                    Create chat
                </Button>
            </Dialog>
        </>     
    );
}