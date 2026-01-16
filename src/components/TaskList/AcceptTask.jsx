import React from 'react'

const AcceptTask = ({ data }) => {

    return (
        <div className='w-[300px] h-full flex-shrink-0'>
            <div className='h-full bg-emerald-700 p-5 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <div className=' bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</div>
                    <h3 className='text-sm'>{data.date}</h3>
                </div>
                <div className='mt-2'>
                    <h1 className='text-2xl font-semibold'>{data.title}</h1>
                    <p className='text-sm mt-2'>{data.description}</p>
                </div>
                <div className='flex justify-between mt-6 '>
                    <button className='bg-green-500 rounded py-1 px-2 text-sm'>Mark as Completed</button>
                    <button className='bg-red-500 rounded py-1 px-2 text-sm'>Mark as Failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask
