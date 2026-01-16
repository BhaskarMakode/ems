import React from 'react'

const FailedTask = ({ data }) => {
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
                <div className='mt-2 flex'>
                    <button className='w-full bg-amber-300 rounded flex items-center justify-center '>Failed</button>
                </div>
            </div>
        </div>
    )
}

export default FailedTask
