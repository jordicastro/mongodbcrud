import React from 'react'

const EditTopicForm = () => {
    return (
        <form className="flex flex-col gap-3">
                <input className="rounded border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />
    
                <input className="rounded border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" />
    
                <button className="bg-purple-500 text-white py-3 px-6 w-fit border border-white rounded-md hover:border-slate-500 active:bg-purple-700" type="submit">Update Topic</button>
        </form>
    )
}

export default EditTopicForm