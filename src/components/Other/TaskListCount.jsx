import React from 'react'

const TaskListCount = ({data}) => {
  return (
    <div className='flex gap-10 px-10 mt-5'>
        <div className='h-40 w-[25%] bg-yellow-400 rounded-2xl px-5 py-10' >
            <h1 className='text-4xl font-bold'>{data.taskCount.newTask}</h1>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>

        <div className='h-40 w-[25%] bg-green-400 rounded-2xl px-5 py-10' >
            <h1 className='text-4xl font-bold'>{data.taskCount.completed}</h1>
            <h3 className='text-2xl font-bold'>Completed</h3>
        </div>

        <div className='h-40 w-[25%] bg-blue-400 rounded-2xl px-5 py-10' >
            <h1 className='text-4xl font-bold'>{data.taskCount.active}</h1>
            <h3 className='text-2xl font-bold'>Active Task</h3>
        </div>

        <div className='h-40 w-[25%] bg-red-400 rounded-2xl px-5 py-10' >
            <h1 className='text-4xl font-bold'>{data.taskCount.failed}</h1>
            <h3 className='text-2xl font-bold'>Failed task</h3>
        </div>
    </div>
  )
}

export default TaskListCount
