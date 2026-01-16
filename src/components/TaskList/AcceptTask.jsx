import React from 'react'

const AcceptTask = ({ data }) => {
    
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
                    <button className='bg-green-600 rounded px-2 py-1'>Mark complete</button>
                    <button className='bg-red-600 rounded px-2 py-1'>Mark failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask
