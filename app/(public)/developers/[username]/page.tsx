import React from 'react'
import {developers} from "@/data/developers"
import {posts} from "@/data/posts"
const DeveloperPosts = async ({params}: { params:Promise<{ username: string }> }) => {
    const { username } = await params;
    const developer=developers.find((item) => item.username === username);
  if(!developer){
    return (
        <div>Developer not found</div>
    )
  }
  const developerPosts=posts.filter((post) => post.username === username);
    return(
        <section className='space-y-3'>
            <h1 className='text-2xl font-bold'>{developer.name}'s Posts</h1>
            <p className='text-gray-600 font-medium text-lg'>{developer.title}</p>
            <p className='text-gray-700'>{developer.bio}</p>
            <ul className='space-y-2'>
                {developerPosts.map((post) => (
                    <li key={post.id} className='border p-4 rounded-md'>
                        <h2 className='text-lg font-semibold'>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default DeveloperPosts