import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to the DevCommunity!</h1>
      <p className="mt-4 text-lg text-gray-600">
        A place for developers to share knowledge, collaborate, and grow together.
      </p>
      <Link href="/communities" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Explore Communities
      </Link>
      <Link href="/developers" className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
        Meet Developers
      </Link>
      
      
    </section>
  )
}

export default page