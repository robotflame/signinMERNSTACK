import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import axios from 'axios'



function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3030/login', {email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))

  }

  return (
   <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
      <h2>Sign-In</h2>
      <form onSubmit={handleSubmit}>
       <div className='mb-3'>
        <label htmlFor="email"><strong>Email</strong></label>
        <input type="email" placeholder='Enter Email' 
        name='email' autoComplete= 'off' className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div className='mb-3'>
         <label htmlFor='email'><strong>Password</strong></label>
         <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0'  onChange={(e)=>setPassword(e.target.value)}></input>
         </div>
         <button type='submit' className='btn btn-succes w-100 rounded-0'>Log in</button>
         <p>You agree to our terms and policies</p>
         <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</button>
         </form>
      </div>

   

   </div>
  )
}

export default App
