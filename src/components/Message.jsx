import { useState } from 'react'
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
    return (
        <div>
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
