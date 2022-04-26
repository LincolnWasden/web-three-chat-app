import Head from 'next/head'
import Image from 'next/image'
import Login from "../components/Login"
import Header from "../components/Header"
import Messages from "../components/Messages"
import { useMoralis } from "react-moralis";


export default function Home() {
  const {isAuthenticated, logout} = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Web 3 Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>I am the app</h1>
      
      <div className='max-w-screen-2xl mx-auto'>
        {/*Header*/}
        <Header />
        {/*Messages*/}
        <Messages />
      </div>
     

    </div> 
  )
}


