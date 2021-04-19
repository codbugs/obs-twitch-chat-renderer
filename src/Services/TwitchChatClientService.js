// libraries imports
import tmi from 'tmi.js';

// services imports
import MessageParserService from './MessageParserService.js';


export default function TwitchChatClientService({ username, password, channel }) {

    const collection = [];
    const messageService = new MessageParserService();

    const client = new tmi.client({
        identity: { username, password },
        channels: [ channel ]
    });

    client.connect();
    client.on('message', (channel, user, message, self) =>  {

        const chatMessage = messageService.create({ message, user });

        collection.forEach(handle => {
            handle(chatMessage);
        });
    });

    return {
        create(handle) {
            collection.push(handle);
        }
    }
}