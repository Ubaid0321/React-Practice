import React ,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const {setuser}=useContext(UserContext)
    const handlesubmit=(e)=>{
        e.preventDefault()
        setuser({Username,Password})
    }
  return (
    <div >
<h2>Login</h2>
<input 
type="text" 
 placeholder='Username'
 value={Username}
onChange={(e)=>setUsername(e.target.value)}
 />{" "}
<input 
type="text" 
 placeholder='Password'
 value={Password}
 onChange={(e)=>setPassword(e.target.value)
 }/>
<button onClick={handlesubmit}>Submit</button>
</div>)
  }

export default Login;