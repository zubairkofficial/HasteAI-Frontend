import Image from 'next/image';
import Head from 'next/head';
import loginImage from './../../../public/laptop_table.jpeg'; 

const ResetPassword = () => {
  return (
    <div className="flex min-h-screen">
    <Head>
      <title>Reset Password</title>
    </Head>

    <div className="w-1/2 flex flex-col justify-center items-center bg-white p-12">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset Your Password
        </h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="current_pasword" className="block text-sm font-medium text-gray-900">
              Current Password
            </label>
            <div className="mt-1">
              <input
                id="current_pasword"
                name="current_pasword"
                type="password"
             
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                New Password
              </label>
           
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
        </form>

      </div>
    </div>

    <div className="w-1/2 relative">
      <Image src={loginImage} alt="Login Image" layout="fill" objectFit="cover" />
    </div>
  </div>
  )
}

export default ResetPassword