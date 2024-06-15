"use client";

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTopicForm = ({id, title, description}) => {
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newTitle,newDescription })
            });
            if (!res.ok) {
                throw new Error("Failed to update topic")
            }

            router.push('/');
            router.refresh();
        } catch (error) {
            console.error(error)   
        }
    }     

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    className="rounded border border-slate-500 px-8 py-2" 
                    type="text" 
                    placeholder="Topic Title"
                />
    
                <input 
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    className="rounded border border-slate-500 px-8 py-2" 
                    type="text" 
                    placeholder="Topic Description" 
                />
    
                <button className="bg-purple-500 text-white py-3 px-6 w-fit border border-white rounded-md hover:border-slate-500 active:bg-purple-700" type="submit">Update Topic</button>
        </form>
    )
}

export default EditTopicForm