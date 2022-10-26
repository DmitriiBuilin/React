import { useRef, useState } from 'react'
import './Message.css'

export const Message = () => {
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
        }
    ]);
    const [value, setValue] = useState('');
    const handleChange = (event) => setValue(event.target.value);
    const ref = useRef(null);    
    const form = (event) => {event.preventDefault()};
    // const setInput = () => {ref.setMessageList([...MessageList, { text: {handleChange}, author: 'Bot' }])};
    const setInput = () => {ref.};
    // const print = console.log('Hey');

    return (
        <div>           
            {MessageList.map(
                (item) => {
                    return (
                        <div key={item}>
                            <h3>{item.author}</h3>
                            <p>{item.text}</p>
                        </div>
                    )
                }
            )}
            <form onSubmit={form}>
                <input ref={ref} type="text" value={value} 
                    onChange={handleChange}/>
                <button onClick={setInput}>Send</button>
            </form>
        </div>
    );
}
