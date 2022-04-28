import Image from "next/image";
import { useMoralis } from "react-moralis";



function Login() {
  const {authenticate} = useMoralis();
  
  const handleLogin = async () => {
    authenticate({
      provider: "web3Auth",
      clientId:
       "BAm1i0JjKYqNf13q3ywWqJSYWnEXK1cFgOLtAAIE41ekgFbkMcNozUa_EFILfa4R0tjKPoWXIO1JwYa4-cf1mfU"
    })

  };
 function needs(){


   alert("You need to use Chrome and have MetaMask");
 }

  return (
    <div className="bg-black w-full h-screen">
       <h1>Login Screen</h1>
       <div className="flex flex-col absolute h-4/6 z-50 w-full items-center justify-center space-y-4">
        {/*CodeMyIdea Fam Logo */}
        <Image 
        className="object-cover rounded-full"
        src="/woman.jpg"
        height={200}
        width={200}
        />
         {/*Login Button*/}
         <button 
         onClick={authenticate}
         className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
           Enter the Web 3 Chat App</button>
           <button
            onClick={needs}
    
           className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
         
         >
           Requirements to Use Software</button>
       </div>


         <div className="w-full h-screen">
        <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
        </div> 
        


        </div>
  )
}

export default Login