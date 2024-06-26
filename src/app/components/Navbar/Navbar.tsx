import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button title="Open Menu" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href='/'>Stick It! Drop your ideas!</a>
      </div>
      <div className="flex-none">
        <button title="Share Options" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" viewBox="0 0 64 64">
            <path fill='#6699ff' d="M 9 9 L 9 14 L 9 54 L 51 54 L 56 54 L 55 42 L 51 42 L 51 49.095703 L 13 50 L 13.900391 14 L 21 14 L 21 10 L 9 9 z M 44 9 L 44 17.072266 C 29.919275 17.731863 19 23.439669 19 44 L 23 44 C 23 32.732824 29.174448 25.875825 44 25.080078 L 44 33 L 56 20.5 L 44 9 z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar
