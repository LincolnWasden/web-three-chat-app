import { userInfo } from "os"
import {useRef} from "react";
import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis"
import SendMessage from "../components/SendMessage"
import Message from "../components/Message"

const MINS_DURATION = 10000000000;

function Messages() {
    const {user} = useMoralis();
    const endOfMessagesRef = useRef(null);
    const {data, loading, error} = useMoralisQuery(
        'Messages', 
        (query) => 
        query
        .ascending('createdAt')
        .greaterThan(
            'creaetedAt', 
            new Date(Date.now() -1000 * 60 * MINS_DURATION)
            ),
            [],
            {
                live: true,
            }
    );

  return (
    <div className="pb-56">
        <div className="my-5">
        <ByMoralis 
        variant="dark"
         style={{marginLeft: "auto", marginRight: "auto"}}/>
        </div>
        <div className="space-y-10 p-4">
        {/* <All Message/> */}
        {data.map(message => (
            <Message key={message.id} message={message}/>
        ))}
        </div>
        <div className="flex justify-center">
            {/* <SendMessage/> */}
            <SendMessage endOfMessagesRef={endOfMessagesRef}/>
        </div>
        <div ref={endOfMessagesRef} className="text-center text-gray-500 mt-5">
            <p>You're up to date {user.getUsername()}! 🎉</p>
        </div>
      
    </div>
  )
}

export default Messages