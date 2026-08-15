import {topics} from '@/data/topics'
import React from 'react'

const page = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Explore Topics</h1> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="p-6 bg-white text-black font semibold rounded-xl shadow hover:bg-gray-200 transition duration-200 cursor-pointer">
              <h2 className="text-lg ">{topic}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page