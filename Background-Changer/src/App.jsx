import {useState  } from "react";
function App() {
  const [color, setcolor] = useState("black")

  return (
  <div className="w-full h-screen duration-200"style={{backgroundColor:color}}>  
  <div className=" fixed flex-wrap flex  justify-center bottom-12 inset-x-0 px-2">
  <div className="flex-wrap flex  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"red"}}  onClick={()=>setcolor("red")}  >Red</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"green"}}onClick={()=>setcolor("green")}>Green</button>
    <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"style={{backgroundColor:"yellow"}}onClick={()=>setcolor("yellow")}>Yellow</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"blue"}}onClick={()=>setcolor("blue")}>Blue</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"orange"}} onClick={()=>setcolor("orange")}> Orange</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"Brown "}}  onClick={()=>setcolor("brown")}>Brown</button>
    <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"aqua"}}  onClick={()=>setcolor("aqua")}>Aqua</button>
    <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"grey "}}  onClick={()=>setcolor("grey")}>Grey</button>
    <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"pink"}}  onClick={()=>setcolor("pink")}>Pink</button>
    <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"purple"}}  onClick={()=>setcolor("purple")}>Purple</button>
    <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"style={{backgroundColor:"olive"}}  onClick={()=>setcolor("olive")}>Olive</button>
    
    
    
    </div> </div> 
  </div>
  

          
    
  )
}

export default App
