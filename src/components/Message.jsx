import { useRef, useState, useEffect } from 'react'
import './Message.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

export const Message = () => {
    const [MessageList, setMessageList] = useState([]);
    const [Value, setValue] = useState('');
    const handleChange = (event) => setValue(event.target.value);
    const ref = useRef(null);    
    const form = (event) => {event.preventDefault()};
    const setInput = () => {
        setMessageList([...MessageList, 
            {text: Value, author: 'User' }
        ])
    };

    // function stringToColor(string) {
    //     let hash = 0;
    //     let i;
      
    //     /* eslint-disable no-bitwise */
    //     for (i = 0; i < string.length; i += 1) {
    //       hash = string.charCodeAt(i) + ((hash << 5) - hash);
    //     }
      
    //     let color = '#';
      
    //     for (i = 0; i < 3; i += 1) {
    //       const value = (hash >> (i * 8)) & 0xff;
    //       color += `00${value.toString(16)}`.slice(-2);
    //     }
    //     /* eslint-enable no-bitwise */
      
    //     return color;
    //   }
      
    //   function stringAvatar(name) {
    //     return {
    //       sx: {
    //         bgcolor: stringToColor(name),
    //       },
    //       children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    //     };
    //   }

    useEffect(() => {
        if (MessageList[MessageList.length - 1]?.author === 'User C') { 
            setTimeout(() => {setMessageList([...MessageList, 
                { 
                    text: "Hallo, Ola, Merhaba, שלןם, Привет, Hello, Сәлеметсіз бе, 你好, こんにちは, Բարեւ Ձեզ", 
                    author: "Bot B" 
                }]); 
            }, 1500); } 
        }, [MessageList]);

    return (
        <div>           
            {MessageList.map(
                (item) => {
                    return (
                        <div key={MessageList[item]}>
                            {/* <h3><Avatar alt={item.author} src="/src/img/ava.jpg"/> {item.author}</h3> */}
                                {/* <Avatar {...stringAvatar('Bob d')} /> */}
                            <h3>Name: {item.author}</h3>
                            <p>Message: {item.text}</p>
                        </div>
                    )
                }
            )}
            <form className='input-form' onSubmit={form}>
                <input className='input' ref={ref} type="text" value={Value} 
                    onChange={handleChange}/>
                {/* <TextField className='input' ref={ref} id="outlined-basic" 
                    label="Message" variant="outlined" value={Value} 
                    onChange={handleChange}
                /> */}
                <button className='button' onClick={setInput}>Send</button>
                {/* <Button variant="outlined" className='button' 
                    onClick={setInput}>Send
                </Button> */}
            </form>
        </div>
    );
}
