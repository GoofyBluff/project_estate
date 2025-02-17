import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm flex sm:text-xl flex-wrap'>
          <span className='text-slate-600'>
            Goofy
          </span>
          <span className='text-slate-400'>
            Estate
          </span>
        </h1>
        </Link>
        <form className='bg-slate-100 rounded-lg flex items-center p-3'>
          <input type="text" placeholder='Search...' className='bg-transparent w-24 focus:outline-none sm:w-64'/>
          <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-3'>
          <Link to='/'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>
            Home
          </li>
          </Link>
          <Link to='/about'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>
            About
          </li>
          </Link>
          <Link to='/sign-in'>
          <li className='text-slate-700 hover:underline'>
            Sign-In
          </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
