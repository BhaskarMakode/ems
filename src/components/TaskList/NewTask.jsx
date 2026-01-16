import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div>
            <div className='w-[300px] h-full flex-shrink-0'>
                <div className='h-full bg-blue-400 p-5 rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <div className=' bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</div>
                        <h3 className='text-sm'>{data.date}</h3>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-2xl font-semibold'>{data.title}</h1>
                        <p className='text-sm mt-2'>{data.description}</p>
                    </div>
                    <div className='mt-6'>
                        <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewTask
