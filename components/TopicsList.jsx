import React from 'react'
import TopicCard from '@/components/TopicCard';
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function TopicsList() {


    const {topics} = await getTopics();

    console.log(topics)

    return (
        <>
            {topics.map( (topic) => {
                return (
                    <TopicCard key={topic._id} topic={topic} />
                )
            })}
        </>
    )
}

