import { useState } from "react";

export default function TestPage() {

     const [count,setCount]= useState(0)
     const [sts , setSts] = useState("Passed")

  
    return (
        <div className="w-full h-screen flex justify-center items-center">
           <div className="w-[450px] h-[250px] shadow-2xl flex justify-center items-center">
            <button onClick={()=>{
                if(count>0){
                setCount(count - 1)
                }
            }} className="bg-blue-400 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer hover:bg-blue-700">-</button>

            <span className="font-bold text-center w-[100px] h-[40px] text-[20px] mx-[10px] flex justify-center items-center">
                {count}
            </span>
            <button onClick={()=>{
                setCount(count + 1)
                console.log("+ clicked");
            }} className="bg-blue-400 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer hover:bg-blue-700">+</button>
          
           </div>


             <div className="w-[450px] h-[250px] shadow-2xl flex justify-center items-center">
            <button onClick={()=>{
              setSts("Faid")
            }} className="bg-blue-400 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer hover:bg-blue-700">faild</button>

            <span className="font-bold text-center w-[100px] h-[40px] text-[20px] mx-[10px] flex justify-center items-center">
                {sts}
            </span>
            <button onClick={()=>{
               setSts("passed")
            }} className="bg-blue-400 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer hover:bg-blue-700">Passed</button>
          
           </div>

            
        </div>









    );
}