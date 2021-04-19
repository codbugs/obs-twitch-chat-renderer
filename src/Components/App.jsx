// libraries imports
import React from 'react';

// components imports
import Background from './Background.jsx';
import Chat from './Chat.jsx';

// service imports
import TwitchChatService from '../Services/TiwtchChatService.js';


export default function App() {

    let [message, setMessage] = React.useState(null);
    let [items, setItems] = React.useState([]);


    const service = new TwitchChatService();

    React.useEffect(() => {
        service.register(data => {
            const chat = { 
                message: data.message,
                user: {
                    color: data.user.color,
                    name: data.user.name
                }
            };

            setMessage(chat);
        });
    }, []);

    React.useEffect(() => {
        if(null === message) {
            return;
        }


        if(items.length > 9) {
            setItems([message, ...(items.slice(0, 9))]);
        } else {
            setItems([message, ...items]);
        }
    }, [message]);

    return <React.Fragment>
            <Background />
            <Chat items={items} />
        </React.Fragment>;
}