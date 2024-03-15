import { Link, Outlet } from 'react-router-dom'
import '../App.css'

export const Navbar = () => {

  const ClickedHandel = () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  }

  return (
    <>
      <nav className="bg-[#171a1e] p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className='flex text-white font-bold text-4xl space-x-3'>
            <h1><span className='text-[#d21c23]'>Blood</span> Bank</h1>
            </div>
            <div className="flex items-center">
              {/* <!-- Mobile Menu Button --> */}
              <button className="text-white md:hidden focus:outline-none hover:text-red-500" onClick={ClickedHandel}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
              {/* <!-- Mobile Menu --> */}
              <div className="md:hidden fixed inset-3 mt-16 h-40 bg-[#d21c23] rounded-lg bg-opacity-75 hidden" id='mobile-menu'>
                <div className="flex flex-col items-center justify-center">
                  <Link to={'/Home'} className="text-white font-semibold py-2 hover:text-[red]">Home</Link>
                  <Link to={'/'} className="text-white font-semibold py-2 hover:text-[red]">Sign Up</Link>
                </div>
              </div>
              {/* <!-- Desktop Menu --> */}
              <div className="hidden md:flex space-x-4">
                <Link to={'/Home'} className="text-white font-semibold py-2 hover:text-[red]">Home</Link>
                <Link to={'/'} className="text-white font-semibold py-2 hover:text-[red]">Sign Up</Link>

              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}
