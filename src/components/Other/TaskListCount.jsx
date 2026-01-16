import React from 'react'

const TaskListCount = ({ data }) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='rounded-xl w-[45%] lg:w-[22%] py-6 px-9 bg-yellow-400' >
                <h1 className='text-3xl font-semibold'>{data.taskCount.newTask}</h1>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl w-[45%] lg:w-[22%] py-6 px-9 bg-green-400' >
                <h1 className='text-3xl font-semibold'>{data.taskCount.completed}</h1>
                <h3 className='text-xl font-medium'>Completed</h3>
            </div>

            <div className='rounded-xl w-[45%] lg:w-[22%] py-6 px-9 bg-blue-400' >
                <h1 className='text-3xl font-semibold'>{data.taskCount.active}</h1>
                <h3 className='text-xl font-medium'>Active Task</h3>
            </div>

            <div className='rounded-xl w-[45%] lg:w-[22%] py-6 px-9 bg-red-400' >
                <h1 className='text-3xl font-semibold'>{data.taskCount.failed}</h1>
                <h3 className='text-xl font-medium'>Failed task</h3>
            </div>
        </div>
    )
}

export default TaskListCount
