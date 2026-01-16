import React from 'react'

const EmployeeHeader = ({}) => {
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }

  return (
    <>
        <div className='flex justify-between items-center p-10'>
            <div className='flex'><h1 className='text-xl font-semibold'><span>Hello</span> <br /> <span>Bhaskar👋</span> </h1></div>
            <button
              onClick={logOutUser}
              className='h-10 w-20 bg-red-600 rounded'>
                Log Out
              </button>
        </div>
    </>

  )
}

export default EmployeeHeader
