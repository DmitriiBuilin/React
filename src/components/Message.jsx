import { useRef, useState, useEffect } from 'react'
import './Message.css'

export const Message = () => {
    const [MessageList, setMessageList] = useState([
        {
            text: 'text 1',
            author: 'author 1',
        }
    ]);
    const [Value, setValue] = useState('');
    const handleChange = (event) => setValue(event.target.value);
    const ref = useRef(null);    
    const form = (event) => {event.preventDefault()};
    const setInput = () => {
        setMessageList([...MessageList, 
            {text: 'Text from the User', author: 'User' }
        ])
    };

    useEffect(() => {
        if (MessageList[MessageList.length - 1]?.author === 'User') { 
            setTimeout(() => {setMessageList([...MessageList, 
                { text: 'Something in bot\'s language', author: 'Bot' }]); 
            }, 1500); } 
        }, [MessageList]);

    return (
        <div>           
            {MessageList.map(
                (item) => {
                    return (
                        <div key={MessageList[item]}>
                            <h3>Name: {item.author}</h3>
                            <p>Message: {item.text}</p>
                        </div>
                    )
                }
            )}
            <form onSubmit={form}>
                <input className='input' ref={ref} type="text" value={Value} 
                    onChange={handleChange}/>
                <button className='button' onClick={setInput}>Send</button>
            </form>
        </div>
    );
}
