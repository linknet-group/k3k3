import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div>

<div className='p-[20px] m-[20px] mt-[100px]'>
    <h1 className='font-bold text-2xl underline'>Welcome</h1>
    <p>KIndly enter your deatils <br /> lets ride</p>
    <form action="" className='grid  py-10 gap-[10px]'>
       
        <label  htmlFor="">Username</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text" />

       

        <label htmlFor="">Password</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text" />

       

<button type='submit' className='text-white text-2xl px-4 py-2 border rounded-[15px] bg-red-500'>Login</button>

<Link className='text-red-500 underline' href="/WelcomePage">welcome Page</Link>



        
    </form>
</div>




    </div>
  )
}

export default Login