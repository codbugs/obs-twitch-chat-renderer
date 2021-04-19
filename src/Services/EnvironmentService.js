export default function EnvironmentService() {
    return {
        find() {
            return {
                username: '', // set your Twitch Bot username
                password: '', // set your Twitch key
                channel: '' // set your Twitch channel name
            };
        }
    }
}