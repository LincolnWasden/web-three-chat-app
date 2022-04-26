import Image from "next/image";
import { useMoralis } from "react-moralis";


function Login() {
  const {authenticate} = useMoralis();
  return (
    <div className="bg-black relative">
       <h1>Login Screen</h1>
       <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/*CodeMyIdea Fam Logo */}
        <Image 
        className="object-cover rounded-full"
        src="https://ibb.co/6N0jyj6"
        height={200}
        width={200}
        />
         {/*Login Button*/}
         <button 
         onClick={authenticate}
         className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
           Login into the MetaVerse</button>
       </div>


        <div className="w-full h-screen">
        <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
        </div>
       
        


        </div>
  )
}

export default Login