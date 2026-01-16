import React from 'react'
import EmployeeHeader from '../Other/EmployeeHeader'
import CreateTaskForm from '../Other/CreateTaskForm'
import AllTask from '../Other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div>
      <EmployeeHeader changeUser={props.changeUser}/>
      <CreateTaskForm />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
