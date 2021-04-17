import React from 'react';

import Background from './Background.jsx';
import Chat from './Chat.jsx';

import faker from 'faker';

export default function App() {

    let [message, setMessage] = React.useState(null);
    let [items, setItems] = React.useState([]);
    let intervalId = null;

    React.useEffect(() => {
        intervalId = setInterval(() => {
            const chat = { 
                message: faker.lorem.sentence(),
                user: {
                    color: faker.internet.color(),
                    name: faker.name.firstName()
                }
            };

            setMessage(chat);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 15000);
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