import React from 'react'
import Link from 'next/link'

const CommunityCard = ({id,name,description,slug,members,category}:{ id: string; name: string; description: string; slug: string; members: number; category: string }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold text-black">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-black">Members: {members}</p>
      <p className="text-black">{category}</p>

      <Link href={`/communities/${slug}`} className="text-blue-500 hover:underline">
        View Community
      </Link>
    </div>
  )
}

export default CommunityCard