/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

'use client'
import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/navigation";

const Login = () => {

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setData((prev) => ({ ...prev, [name]: value }));
  // };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        // const response = await fetch("https://rattleviper.pythonanywhere.com/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.error) {
        setError(responseData.error);
      } else {
     
        router.push('/WelcomePage');
      }
    } catch (error: any) {
      console.error("Login error:", error);
      setError('Wrong credential please try login in again!.');
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div>

<div className='container mx-auto p-[20px] m-[20px]'>
    <h1 className='font-bold text-2xl underline'>Welcome</h1>
    <p>KIndly enter your deatils <br /> lets ride</p>
    <form action=""
    onSubmit={handleSubmit}
    className='grid  py-10 gap-[10px]'>
       
        <label  htmlFor="">Username</label>
        <input className='border rounded-[10px] outline-gray-500 p-[5px]' 
        type="text"
        name = "username"
        id="username"
        placeholder="username"
        value={data.username}
        onChange={handleChange}
        
        required
        />

       

        <label htmlFor="">Password</label>
<div className="relative">


<input className='border rounded-[10px] outline-gray-500 p-[5px]' 
        type={passwordVisible ? "text" : "password"}
        id="password"
        name = "password"
        placeholder="password"
        value={data.password}
        onChange={handleChange}

        required
        />
  <button  type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute  top-2">
            {passwordVisible ? "Hide" : "Show"}
          </button>
</div>

     
       
<div className='pb-[10px]'></div>
<button type='submit' 
className='text-white text-1xl py-0.5 border rounded-[15px] bg-red-500'>

<div className="flex justify-center items-center">
            {isLoading ? (
              <div className="flex items-center gap-3">
                <p>Loading ....</p>
              </div>
            ) : (
              <p></p>
            )}


Login
          </div>

</button>

{error && <p className="text-red-500">{error}</p>}

<Link className='text-red-500 underline' href="/">Sign Up</Link>



        
    </form>
</div>




    </div>
  )
}

export default Login