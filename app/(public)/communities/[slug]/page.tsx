import {communities} from "@/data/communities"
import React from 'react'
import JoinButton from '@/components/join-button'
type Props = {
    params: Promise<{slug:string}>;
}
const page = async ({params}:Props) => {
    const {slug}=await params;
    const community=communities.find((item)=>item.slug===slug);
    return (
        <section className='space-y-3'>
            <h1 className='text-2xl font-bold'>{community?.name}</h1>
            <p> {community?.description}</p>
            <p> {community?.members} members </p>
            <p> {community?.category}</p>
            <JoinButton/>
        </section>
    )
}
export default page