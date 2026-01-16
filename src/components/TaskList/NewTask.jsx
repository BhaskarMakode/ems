import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div>
            <div className='w-70 h-60 bg-emerald-700 p-5 rounded-2xl'>
                <div className='flex justify-between'>
                    <div className=' flex items-center justify-center bg-emerald-900 px-1 py-1 rounded-xl '>{data.category}</div>
                    <h3>{data.date}</h3>
                </div>
                <div className='mt-2'>
                    <h1 className='text-lg font-semibold'>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
                <div className='flex justify-between mt-3 font-semibold'>
                    <button className='bg-blue-600 rounded px-2 py-1'>Accept task</button>
                </div>
            </div>
        </div>
    )
}

export default NewTask
