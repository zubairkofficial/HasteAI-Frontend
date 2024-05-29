'use client';

import Image from 'next/image';
import Head from 'next/head';
import loginImage from './../../../public/laptop_table.jpeg'; // Ensure the image path matches your project structure
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const ValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export default function Page() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ValidationSchema)
  });

  const handleFormSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error('Registration failed. Please try again.', error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(handleFormSubmit)}>
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="forget-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-600">
            Not a member?{' '}
            <a href="sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up now
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
