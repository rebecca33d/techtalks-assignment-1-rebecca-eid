import React from 'react'
import {developers} from "@/data/developers"
import DeveloperCard from '@/components/developer-card'

const page=() => {
    return (
        <section className='space-y-3'>
            <h1 className='text-2xl font-bold'>Developers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {developers.map((developer) => (
                    <DeveloperCard key={developer.id} {...developer} />
                ))}
            </div>
        </section>
    )
}

        
export default page