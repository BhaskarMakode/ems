import React from 'react'
import EmployeeHeader from '../Other/EmployeeHeader'
import CreateTaskForm from '../Other/CreateTaskForm'
import AllTask from '../Other/AllTask'

const AdminDashboard = () => {
  return (
    <div>
      <EmployeeHeader />
      <CreateTaskForm />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
