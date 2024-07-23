/* eslint-disable react/no-unescaped-entities */

// import React from 'react'
'use client'
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);



  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (data.password !== data.confirm_password) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/signup/", {
      // const response = await fetch(
      //   "https://rattleviper.pythonanywhere.com/api/signup/",
      //   {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.error) {
        console.error(responseData.error);
        alert(responseData.error);
      } else {
        router.push("/LoginPage");
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("A user is already using the same email");
      setError("A user is already using the same email");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-[20px] m-[20px] ">
        <h1 className="text-center font-bold text-2xl underline">
          Create An Account
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="grid  py-10 gap-[2px]"
        >
          <label htmlFor="">Name</label>
          <input
            className="border rounded-[10px] outline-gray-500 p-[5px]"
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />

          <label htmlFor="">Username</label>
          <input
            className="border rounded-[10px] outline-gray-500 p-[5px]"
            type="text"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={handleChange}
          />

          <label htmlFor="">Email</label>
          <input
            className="border rounded-[10px] outline-gray-500 p-[5px]"
            type="email"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={handleChange}
          />

          <label htmlFor="">Password</label>

          <div className="relative">
          <input
            className="border rounded-[10px] outline-gray-500 p-[5px]"
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleChange}

          />
          
          <button  type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute  top-2">
            {passwordVisible ? "Hide" : "Show"}
          </button>

          </div>
         


          <label htmlFor="">Confirm Password</label>

          <div className="relative">


          <input
            className="border rounded-[10px] outline-gray-500 p-[5px]"
            type={confirmPasswordVisible ? "text" : "password"}
            name="confirm_password"
            placeholder="*************"
            value={data.confirm_password}
            onChange={handleChange}
          />

       <button type="button" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} className="absolute  top-2 ">
            {confirmPasswordVisible ? "Hide" : "Show"}
          </button>


          </div>
        


          <div className="pb-[20px]"></div>
          <button
            type="submit"
            className="text-white text-1xl py-0.5  border rounded-[15px] bg-red-500"
          >


<div className="flex justify-center">


{isLoading ? (
        <div className="flex items-center gap-3">
          {/* <span className="animate-spin"><FaSpinner  /></span> */}
          
          <p>Loading ....</p>
        </div>
      ) : (
        <div>
         
          <p></p>
        </div>
      )}

      Create Account
</div>



            
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-center items-center gap-2">
            <p>Already have an account?</p>
            <Link href="/LoginPage" className="text-red-500 underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
