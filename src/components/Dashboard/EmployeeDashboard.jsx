import React from 'react'
import EmployeeHeader from '../Other/EmployeeHeader'
import TaskListCount from '../Other/TaskListCount'
import TaskCards from '../Other/TaskCards'

const EmployeeDashboard = ({data}) => {
  return (
    <>
      <EmployeeHeader data={data} />
      <TaskListCount data={data} />
      <TaskCards data={data}/>
    </>
  )
}

export default EmployeeDashboard
