/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import k3k31 from "../../../public/k3k31.jpeg"

import Link from 'next/link';

const Welcome = () =>{
    return(

<div className='bg-yellow-400 h-[100vh]'>
 
 <div>

    <h1 className='font-bold text-[2rem]'>welcome</h1>
    <p>Start your journey with ease  <br />
    and convenience. Enjoy the ride!
    </p>
<Image src={k3k31} alt='k3k'></Image>

    <p>We're here to make your short <br />
    distance trip memorable
    </p>

    <Link href="/">
    <div className="flex justify-end px-4">
<FaArrowRight size={20} className='border rounded-[30px] border-black' />
</div>
    </Link>

    
<Link className='text-red-500 underline' href="/LoginPage">Back to Login</Link>
 </div>

</div>
    )
};

export default Welcome;