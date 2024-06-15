"use client";
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddTopic = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert('Please fill out both fields');
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description }),
                
            });

            if (res.ok) {
                router.push('/');
            } else {
                throw new Error("Failed to create topic", res.statusText);
            }

        } catch (error) {
            console.log(error);
        }
    };

return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
                className="rounded border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title"
            />

            <input 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="rounded border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" 
            />

            <button className="bg-purple-500 text-white py-3 px-6 w-fit border border-white rounded-md hover:border-slate-500 active:bg-purple-700" type="submit">Add Topic</button>
    </form>
)
}

export default AddTopic