import React from 'react'

const EmployeeHeader = (props) => {
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('');
  }

  return (
    <>
      <div className='flex justify-between items-center p-10 bg-[#1c1c1c]'>
        <div className='flex'><h1 className='text-xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold'>{props.data ? props.data.firstName : 'Admin'}👋</span> </h1></div>
        <button
          onClick={logOutUser}
          className='h-10 w-20 bg-red-600 font-medium rounded-sm text-lg'>
          Log Out
        </button>
      </div>
    </>

  )
}

export default EmployeeHeader
