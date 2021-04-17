import React from 'react';

export default function ChatItem({ item }) {

    return <div className="message">
        <span className="message-user" style={{
            color: item.user.color
        }}>{ item.user.name }</span>
        <span className="message-text">{ item.message }</span>
    </div>;
}