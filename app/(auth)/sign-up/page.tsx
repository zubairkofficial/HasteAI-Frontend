'use client';

import Image from 'next/image';
import Head from 'next/head';
import loginImage from './../../../public/laptop_table.jpeg'; // Ensure the image path matches your project structure
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from "react";

let ValidationSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export default function Page() {
  const [message, setMessage] = useState(null); 
  const { register, reset, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(ValidationSchema)
  });

  const handleFormSubmit = async (data) => {
    try {
      setMessage(null);
      const response = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": data.username,
          "email": data.email,
          "password": data.password
        })
      });
      if(response.ok){
        setMessage("User Register Successfully.")
        reset()
      }
      const responseObject = await response.json();
      console.log(responseObject);
    } catch (error) {
      console.error('Registration failed. Please try again.', error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Register</title>
      </Head>

      {/* Login Form Side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-12">
        {/* Updated Form with More Detailed Styling */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleFormSubmit)} action="#" method="POST" >
            {message && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-3">{message}</div>
            )}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  {...register('username')}
                  
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.username && (
                    <div className="text-red-500">{errors.username.message}</div>
                  )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...register('email')}
                  
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  {...register('password')}
                  
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.password && (
                    <div className="text-red-500">{errors.password.message}</div>
                  )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-600">
            Already a Member?{' '}
            <a href="sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in now
            </a>
          </p>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-1/2 relative">
        <Image src={loginImage} alt="Login Image" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
