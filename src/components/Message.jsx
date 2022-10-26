import { useRef, useState } from 'react'
import './Message.css'

export const Message = ({item}) => {
    const [MessageList, setMessageList] = useState([
        {
            text: 'text 1',
            author: 'author 1',
        },
        {
            text: 'text 2',
            author: 'author 2',
        },
        {
            text: 'text 3',
            author: 'author 3',
        },
        {
            text: 'text 4',
            author: 'author 4',
        }
    ]);
    const [value, setValue] = useState('');
    const handleChange = (event) => setValue(event.target.value);
    const ref = useRef(null);    
    const form = (event) => {event.preventDefault()};
    const setInput = () => {ref.current.style.color = 'red'};

    return (
        <div>
            <form onSubmit={form}>
                <input ref={ref} type="text" value={value} 
                    onChange={handleChange}/>
                <button onClick={setInput}>Send</button>
            </form>
            
            {MessageList.map(
                (item) => {
                    return (
                        <>
                            <h3>{item.author}</h3>
                            <p>{item.text}</p>
                        </>
                    )
                }
            )}
            
        </div>
    );
}
