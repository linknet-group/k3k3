/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div>

<div className='container mx-auto p-[20px] m-[20px] '>
    <h1 className='text-center font-bold text-2xl underline'>Create An Account</h1>
    <form action="" className='grid  py-10 gap-[2px]'>
        <label htmlFor="">Name</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text" />

        <label  htmlFor="">Username</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text" />

        <label htmlFor="">Email</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text"  />

        <label htmlFor="">Password</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text" />

        <label htmlFor="">Confirm Password</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' type="text" />

<div className='pb-[20px]'></div>
<button type='submit' className='text-white text-1xl py-0.5  border rounded-[15px] bg-red-500'>Create Account</button>

<div className="flex justify-center items-center gap-2">
<p>Already have an account?</p>
<Link href="/LoginPage" className='text-red-500 underline'>Sign In</Link>
</div>


        
    </form>
</div>

    </div>
  )
}

export default SignUp