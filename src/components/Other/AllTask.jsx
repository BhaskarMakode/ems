import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  return (

    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2 h-10 flex justify-between items-center rounded px-2 '>
        <h2>Employee Name</h2>
        <h3>NewTask</h3>
        <h5>Active Task</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>

      <div id='tasklist' className='h-[80%] overflow-auto '>
        {userData ? userData.map(function (elem, idx) {
          return <div key={idx} className='bg-red-400 mb-2 h-10 flex justify-between items-center rounded px-2 '>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
          </div>
        }) : null}
      </div>

    </div>
  )
}

export default AllTask
