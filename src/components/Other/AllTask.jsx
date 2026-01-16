import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)

  return (
    
    <div className='bg-[#1c1c1c] p-5 h-48 '>
      <div className='bg-red-400 mb-2 h-10 flex justify-between items-center rounded px-2 '>
        <h2>Employee Name</h2>
        <h3>NewTask</h3>
        <h5>Active Task</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>

      <div className='h-[80%] overflow-auto '>
        {authData.employees.map(function(elem){
        return <div className='bg-red-400 mb-2 h-10 flex justify-between items-center rounded px-2 '>
                  <h2>{elem.firstName}</h2>
                  <h3>NewTask</h3>
                  <h5>Active Task</h5>
                  <h5>Completed</h5>
                  <h5>Failed</h5>
              </div>
        })}
      </div>
      
    </div>
  )
}

export default AllTask
