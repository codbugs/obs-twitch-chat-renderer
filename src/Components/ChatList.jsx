import React from 'react';
import ChatItem from './ChatItem.jsx';

export default function ChatList({ items }) {

    return <ul className="chat-list">
        {
            items
                .filter(item => item !== null)
                .map((item, index) => {
                    return <li key={index} className="chat-listItem">
                            <ChatItem item={item} />
                        </li>;
                })
        }
        </ul>;
}