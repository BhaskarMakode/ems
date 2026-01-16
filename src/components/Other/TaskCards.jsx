import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const TaskCards = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            {data.tasks?.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}

        </div>
    )
}

export default TaskCards
