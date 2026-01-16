import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTaskForm = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = React.useState('')
    const [date, setDate] = React.useState('')
    const [assignTo, setAssignTo] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [description, setDescription] = React.useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask({ taskTitle, date, category, description, active: false, newTask: true, completed: false, failed: false })

        const data = userData;

        data.forEach(function (elem) {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask + 1

            }
        })

        // setUserTaskData(data)



        setAssignTo('')
        setCategory('')
        setDate('')
        setDescription('')
        setTaskTitle('')

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form className='' onSubmit={(e) => {
                submitHandler(e);
            }}>

                <div className='w-full mt-7 flex flex-wrap items-start justify-between'>
                    <div className='w-full md:w-1/2'>
                        <div className='m-4'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-full md:w-[80%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text"
                                placeholder='Ex-Make a UI design'
                            />
                        </div>

                        <div className='m-4'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-full md:w-[80%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="date"
                                placeholder=''
                            />
                        </div>

                        <div className='m-4'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input
                                value={assignTo}
                                onChange={(e) => {
                                    setAssignTo(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-full md:w-[80%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text"
                                placeholder='employee name'
                            />
                        </div>

                        <div className='m-4'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-full md:w-[80%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text"
                                placeholder='design,dev,etc'
                            />
                        </div>
                    </div>

                    <div className='w-full md:w-2/5 flex flex-col items-start'>
                        <div className='w-full'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                            <textarea name="" id=""
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                                placeholder='description... '>
                            </textarea>
                        </div>

                        <button
                            className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'
                        >
                            Create task
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CreateTaskForm
