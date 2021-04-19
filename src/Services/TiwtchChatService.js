// services imports
import TwitchChatClientFactory from './TwitchChatClientFactory.js';


export default function TwitchChatService() {
    
    const twitchChatClientFactory = new TwitchChatClientFactory();
    const client = twitchChatClientFactory.create();

    return {
        register(callback) {
            client.create(callback);
        }
    };
}