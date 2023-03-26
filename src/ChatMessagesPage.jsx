// import { PrettyChatWindow } from "react-chat-engine-pretty"
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"
import "./App.css"

// This is the react-chat-engine-advanced version - plain version
const ChatMessagesPage = (props) => {

    const chatMessageProps = useMultiChatLogic(
        "859197cc-c802-49c9-90e7-4d53083a0a6a",
        props.user.username,
        props.user.secret
    )

    return (
        <div style={{ height: '100vh' }} >
            <MultiChatSocket {...chatMessageProps} />
            <MultiChatWindow {...chatMessageProps} style={{ height: '100%' }} />
        </div>
    )
}



// This is the react-chat-engine-pretty version - it works on mobile well too, but doesn't have the side bars
// const ChatMessagesPage = (props) => {
//     return (
//         <div style={{ height: '100vh' }}>
//             <PrettyChatWindow
//                 projectId="859197cc-c802-49c9-90e7-4d53083a0a6a"
//                 username={props.user.username}
//                 secret={props.user.secret}
//                 style={{ height: '100%' }}
//             />
//         </div>
//     )
// }



export default ChatMessagesPage