import { useRef, useState, useEffect } from 'react'
import './Message.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/actions/actions';
import { useParams } from 'react-router-dom';
import { getProfileName } from '../../store/selectors/selectors';


export const Message = ({Messages}) => {

    const profileName = useSelector(getProfileName, shallowEqual);
    const [MessageList, setMessageList] = useState(Messages);
    const [Value, setValue] = useState('');
    const handleChange = (event) => setValue(event.target.value);
    const inputRef = useRef(null);    
    const form = (event) => {event.preventDefault()};
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const setInput = () => {
        const message = {text: Value, author: profileName };
        setMessageList([...MessageList, 
            {text: Value, author: profileName }
        ]);
        dispatch(addMessage(chatId, message));
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));
    
    // const renderMessage = useCallback((message, i) => (
    //     <div key={i}>
    //         <span>
    //             {message.author === AUTHORS.ME ? profileName : message.author}:
    //         </span>
    //         <span>
    //             {message.text}
    //         </span>
    //     </div>
    //     ), [profileName]);

    // const dispatch = useDispatch();
    // const addMessages = (value) => {
    //     dispatch({type: 'ADDMESAGE', payload: value});
    // };
    
    useEffect(() => {
        setValue('');
        inputRef.current?.focus();
        if (MessageList[MessageList.length - 1]?.author === 'User') { 
            setTimeout(() => {
                setMessageList([...MessageList, 
                { 
                    text: "Hallo, Hola, Merhaba, שלום, Привет, Hello, Сәлеметсіз бе, 你好, こんにちは, Բարեւ Ձեզ", 
                    author: "Bot James" 
                }]); 
            }, 1500); } 
        }, [MessageList]
    );

    return (        
        <div className='messages'>                       
            {MessageList.map(   
                (item) => {
                    return (
                        <div className='container' key={MessageList.indexOf(item)}>
                            <h3 className='avatar'>
                                <Avatar alt={item.author} src="/"
                                /> 
                                {item.author}
                            </h3>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                    <Item>{item.text}</Item>
                                </Stack>
                            </Box>
                        </div>
                    )
                }
            )}
            <form className='input-form container' onSubmit={form}>
                <input ref={inputRef} className='input' id="outlined-basic" 
                    label="Message" variant="outlined" value={Value} 
                    onChange={handleChange}
                />
                <Button variant="outlined"  className='button' 
                    onClick={setInput}>Send
                </Button>   
            </form>
        </div>
    );
}
