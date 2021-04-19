// services imports
import EnvironmentService from './EnvironmentService.js';
import TwitchChatClientService from './TwitchChatClientService.js';


export default function TwitchChatClientFactory() {
    
    const env = new EnvironmentService().find();
    
    return {
        create() {
            const service = new TwitchChatClientService({
                username: env.username,
                password: env.password,
                channel: env.channel
            });

            return service;
        }
    }
}