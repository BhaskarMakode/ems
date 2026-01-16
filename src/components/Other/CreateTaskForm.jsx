import React from 'react'

const CreateTaskForm = () => {
  return (
    <div className='w-screen flex p-10 bg-[#1c1c1c] items-center justify-center'>
      <form className=''>
        
        <div className='w-screen  flex p-10 justify-between items-center'>
            <div className='w-1/2'>
                <div className='m-2'>
                    <h3 className='font-semibold'>Task Title</h3>
                    <input 
                    className='border border-gray-200 w-120 h-9 rounded px-2  '
                    type="text" 
                    placeholder='Ex-Make a UI design'
                    />
                </div>

                <div className='m-2'>
                    <h3 className='font-semibold'>Date</h3>
                    <input 
                    className='border border-gray-200 w-120 h-9 rounded px-2 '
                    type="date" 
                    placeholder=''
                    />
                </div>

                <div className='m-2'>
                    <h3 className='font-semibold'>Assign to</h3>
                    <input 
                    className='border border-gray-200 w-120 h-9 rounded px-2 '
                    type="text" 
                    placeholder='employee name'
                    />
                </div>

                <div className='m-2'>
                    <h3 className='font-semibold'>Category</h3>
                    <input 
                    className='border border-gray-200 w-120 h-9 rounded px-2 '
                    type="text" 
                    placeholder='design,dev,etc'
                    />
                </div>
            </div>

            <div className='w-1/2 '>
                <div className='m-2'>
                    <h3 className='font-semibold'>Task Title</h3>
                    <textarea name="" id="" 
                        className='w-120 h-40 border border-gray-300 rounded p-2'
                        placeholder='description... '
                    >

                    </textarea>
                </div>
                
                <button
                    className='h-9 w-120 bg-emerald-500 rounded m-2'
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
