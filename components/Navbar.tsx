import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header>
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">DevCommunity</h1>
            <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/communities">Communities</Link></li>
                <li><Link href="/topics">Topics</Link></li>
                <li><Link href="/developers">Developers</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar