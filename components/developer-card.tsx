import React from 'react'
import Link from 'next/link'


const DeveloperCard = ({ name, title, bio, rating, isNew,username }: { name: string; title: string; bio: string; rating: number; isNew: boolean; username: string }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-gray-600">{title}</p>
      <p className="text-gray-700">{bio}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">★</span>
        <span className="ml-1 text-gray-800 font-medium">{rating.toFixed(1)}</span>
      </div>
      {isNew && (
        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-2">
          New
        </span>
      )}
      <Link href={`/developers/${username}`} className="text-blue-500 hover:underline mt-2 block">
        View Developer
      </Link>
    </div>
  )
}

export default DeveloperCard