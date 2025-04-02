import React from 'react'

function Footer() {
  return (
    <> 
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="footer-logo">
                <h3 className="text-lg font-semibold mb-4">Evangadi Networks</h3>
                <div className="flex space-x-4 mb-4">
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                    <a href="#" aria-label="Instagram">Instagram</a>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Useful Link</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-orange-400 transition duration-300">How it works</a></li>
                    <li><a href="#" className="hover:text-orange-400 transition duration-300">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-orange-400 transition duration-300">Privacy policy</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="mb-2">Evangadi Networks</p>
                <p className="mb-2">+1 (303) 555-0105</p>
                <p>+1 (303) 555-0106</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer