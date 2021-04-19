export default function EnvironmentService() {
    return {
        find() {
            return {
                username: TWITCH_USERNAME,
                password: 'oauth:' + TWITCH_PASSWORD,
                channel: TWITCH_CHANNEL
            };
        }
    }
}