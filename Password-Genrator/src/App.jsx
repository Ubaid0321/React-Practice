
import { useState, useCallback ,useEffect,useRef} from "react";

function App() {
  const [length, setlength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null)
  const PasswordGenerator = useCallback(() => {
    let Pass = "";
    let str = "abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (NumberAllowed) str += "0123456789";
    if (CharAllowed) str += "!@#$%^&*(){}[]~`";
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      Pass += str.charAt(char);
    }
    setPassword(Pass);
  }, [length, NumberAllowed, CharAllowed, setPassword]);
  const CopyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select()
window.navigator.clipboard.writeText(Password)
  },[Password])
useEffect(() => {
  PasswordGenerator()

 
}, [length ,CharAllowed,NumberAllowed,PasswordGenerator ])
 
  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500   ">
        <h1 className="text-white text-center my-3">Password-Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden  mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none  w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={CopyPasswordtoClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x2">
          <div className="flex  items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex  items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex  items-center gap-x-1">
            <input
              type="checkbox"
              id="Charinput"
              defaultChecked={CharAllowed}
              onChange={() => {
              setCharAllowed(  (prev) => !prev)
}}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
   
        </div>
      </div>
    </>
  );
}

export default App;
