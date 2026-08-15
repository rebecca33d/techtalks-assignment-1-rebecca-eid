import {developers} from "@/data/developers"
import {posts} from "@/data/posts"

import React from 'react'

const page = async({params}: { params: Promise<{ username: string }> 
}) => {
    const { username } = await params;
    const developer=developers.find((item) => item.username === username);
  if(!developer){
    return (
      <div>Developer not found</div>
    )
  }
  const developerPosts=posts.filter((post) => post.username === username);
  return (
    <div>
        <h1>{developer.name}'s Posts</h1>
        <div className='space-y-2'>
            {developerPosts.map((post) => (
                <div key={post.id} className='border p-4 rounded-md'>
                    <h2 className='text-lg font-semibold'>{post.title}</h2> 
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page