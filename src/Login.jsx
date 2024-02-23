import React, { useState } from 'react'

const Login = () => {
    const [username,setUsername]=useState("")
    const [Password,setPassword]=useState("")
    const [success,setSuccess]=useState('false')
    const [showerror,setError]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    if(username==='user' && Password==='password'){
       setSuccess(true)
    }

    else {
      setError("Invalid Username and Password")
    }
}
  return (
    <div>
        <h1>Login Page</h1>
        {showerror && showerror}
        <br/>
       {success===true? "Welcome, user!": <form typeof='submit' onSubmit={(e)=>handleSubmit(e)}>
        <label>Username:</label><input type="text" onChange={(e)=> setUsername(e.target.value)} required/>
        <br/>
        <label>Password:</label><input type="text" onChange={(e)=> setPassword(e.target.value)} required/>
        <br/>
        <button>Submit</button>
        </form>}
    </div>
  )
}

export default Login
