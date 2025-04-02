import React from 'react'

function Auth() {
  return (
    <>
      <body className="bg-gray-100">
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-xl font-semibold text-gray-800">Evangadi</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">How it Works</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Sign In</a></li>
              </ul>
            </nav>
            <div className="md:hidden">
              <button id="mobile-menu-button" className="text-gray-700 focus:outline-none focus:shadow-outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <div id="mobile-menu" className="hidden absolute top-16 right-0 bg-white shadow-lg rounded-md py-2 px-4 space-y-3">
                <a href="#" className="block text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600 transition duration-300">How it Works</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600 transition duration-300">Sign In</a>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login to your account</h2>
            <p className="text-gray-600 mb-4">Don't have an account? <a href="#" className="text-orange-500 hover:underline">Create a new account</a></p>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-4" 
            />
            <input 
              type="password" 
              placeholder="Your Password" 
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-6" 
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline">Submit</button>
            <p className="text-center mt-4"><a href="#" className="text-orange-500 hover:underline">Create an account</a></p>
          </div>

          <div className="text-gray-700">
            <h2 className="text-3xl font-semibold mb-6">Evangadi Networks Q&A</h2>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate efficitur sodales. Cras porttitor enim rhoncus accumsan ultrices.
              Morbi fringilla hendrerit leo, nec tincidunt erat aliquam quis. Mauris molestie euismod.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam leo, pretium vitae laoreet non, suscipit id metus.
              Nullam sit amet pellentesque ipsum. Praesent non neque finibus, quis consectetur sem tempor posuere mi, eu vehicula tellus.
            </p>
            <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md inline-block focus:outline-none focus:shadow-outline">HOW IT WORKS</a>
          </div>
        </main>
        
      </body>
    </>
  )
}

export default Auth