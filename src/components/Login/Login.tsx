/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div>

<div className='container mx-auto p-[20px] m-[20px]'>
    <h1 className='font-bold text-2xl underline'>Welcome</h1>
    <p>KIndly enter your deatils <br /> lets ride</p>
    <form action="" className='grid  py-10 gap-[10px]'>
       
        <label  htmlFor="">Username</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text" />

       

        <label htmlFor="">Password</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text" />

       

<button type='submit' className='text-white text-1xl py-0.5 border rounded-[15px] bg-red-500'>Login</button>

<Link className='text-red-500 underline' href="/WelcomePage">welcome Page</Link>



        
    </form>
</div>




    </div>
  )
}

export default Login