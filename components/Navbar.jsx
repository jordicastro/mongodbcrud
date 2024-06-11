import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded-xl">
        <Link className="text-white font-bold" href='/' >Jordi.dev</Link>
        <Link className="bg-gray-500 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-50" href='/addTopic' >Add Topic</Link>
    </nav>
  )
}

export default Navbar