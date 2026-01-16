import React from 'react'
import EmployeeHeader from '../Other/EmployeeHeader'
import TaskListCount from '../Other/TaskListCount'
import TaskCards from '../Other/TaskCards'

const EmployeeDashboard = (props) => {
  return (
    <>
      <EmployeeHeader data={props.data} changeUser={props.changeUser}  />
      <TaskListCount data={props.data}  />
      <TaskCards data={props.data}  />
    </>
  )
}

export default EmployeeDashboard
