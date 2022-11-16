import { FC } from 'react'
import { List, ListItem } from '@mui/material';
import { Chat } from '../types';

interface ChatListProps {
    chats: Chat[];
}

export const ChatList: FC<ChatListProps> = ({chats}) => {


    // const [ChatList] = useState([
    //     {
    //         name: 'Friend Chat',
    //         id: 'Friend',
    //     },
    //     {
    //         name: 'Happy Chat',
    //         id: 'Happy',
    //     },
    //     {
    //         name: 'Lucky Chat',
    //         id: 'Lucky',
    //     },
    // ]);

    // useEffect(() => {
    //     }, []
    // );

    return (
        <>
            <List className='list' component="nav" aria-label="mailbox folders">           
                {chats.map((chat) => 
                    (<ListItem key={chat.id}>
                            {chat.name}                   
                    </ListItem>
                    )
                )}
            </List>
        </>

        // <div className='chatList'>                       
        //    {ChatList.map(
        //         (item) => {
        //             return (
        //                 <div key={item.id}>
        //                     <List className='list' component="nav" aria-label="mailbox folders">
        //                         <ListItem button>
        //                         <ListItemText primary={item.name} />
        //                         </ListItem>
        //                         <Divider />
        //                     </List>
        //                 </div>
        //             )
        //         }
        //    )}
        // </div>
    );
};