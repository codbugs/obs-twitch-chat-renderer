export default function MessageParserService() {

    return {
        create({ message, user }) {

            // TODO: handle if user parameter change to not break the parser

            return {
                message: message,
                user: {
                    color: user.color,
                    name: user.username
                }
            };
        }
    }
}