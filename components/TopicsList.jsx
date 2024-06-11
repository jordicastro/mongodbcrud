import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const TopicsList = () => {
  return (
    <>
        <div className="p-4 border-2 border-slate-300 shadow-md my-3 flex justify-between items-start gap-5">
            <div>
                <h2 className="font-bold text-2xl">Topic Title</h2>
                <div>Topic Description</div>
            </div>

            <div className="flex gap-2">
                <RemoveBtn />
                <Link href={"/editTopic/123"}>
                    <HiPencilAlt size={24} />    
                </Link>
            </div>
        </div>
    </>
  )
}

export default TopicsList