import React from 'react';

import ChatList from './ChatList.jsx';
import Title from './Title.jsx';


export default function Chat({ items }) {

    const component = null !== items && items.length > 0
        ? <ChatList items={items} />
        : <></>;

    return <div className="chat">
        <Title text={'Twitch Chat'} />
        {component}
    </div>;
}