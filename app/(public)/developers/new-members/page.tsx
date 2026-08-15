import React from 'react'
import {developers} from "@/data/developers"

const page = () => {
    const newMembers = developers.filter((developer) => developer.isNew);


  return (
    <div className='w-full min-h-screen bg-black text-white p-8'>
        <div className='max-w-6xl mx-auto px-4 space-y-6'>
        <h1 className='text-3xl font-bold mb-6'>New Members</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {newMembers.map((developer) => (
                <div key={developer.id} className='bg-white text-black p-4 rounded-md shadow-sm>'>
                    <h2 className='text-lg font-semibold'>{developer.name}</h2> 
                    <p>Username: {developer.username}</p>
                    <p>Rating: {developer.rating}</p>
                </div>
            ))}
        </div></div>
    </div>
  ) 
}

export default page