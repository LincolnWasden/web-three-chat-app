import { userInfo } from "os"
import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis"
import SendMessage from "../components/SendMessage"

function Messages() {
    const {user} = useMoralis();
  return (
    <div className="pb-56">
        <div className="my-5">
        <ByMoralis 
        variant="dark"
         style={{marginLeft: "auto", marginRight: "auto"}}/>
        </div>
        <div>
        {/* <All Message/> */}
        </div>
        <div className="flex justify-center">
            {/* <SendMessage/> */}
            <SendMessage/>
        </div>
        <div className="text-center text-gray-500 mt-5">
            <p>You're up to date {user.getUsername()}!</p>
        </div>
        <h1>I am the messages {user.getUsername()}</h1>
    </div>
  )
}

export default Messages