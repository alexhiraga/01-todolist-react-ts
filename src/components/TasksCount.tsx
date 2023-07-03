import { useState, useEffect } from 'react'

export interface TaskType {
    id: string;
    description: string;
    isCompleted: boolean;
}
interface TaskProps {
    tasks: TaskType[];
}

const TasksCount = ({tasks}: TaskProps) => {

    const [tasksQuantity, setTaskQuantity] = useState(0)
    const [completedTasks, setCompletedTasks] = useState(0)

    useEffect(() => {
        const taskLength = tasks.length
        const taskCompleted = tasks.filter(task => {
            if(task.isCompleted) return task
        })
        setTaskQuantity(taskLength)
        setCompletedTasks(taskCompleted.length)
    }, [tasks])
    
    return (
        <div>
            <div className="flex justify-between max-w-[726px] text-center mx-auto">
                <div className="flex gap-2 ">
                    <span className="font-bold text-blue">
                        Tarefas criadas
                    </span>
                    <div className="bg-gray-400 rounded-full px-3 text-xs font-bold flex flex-col justify-center h-[19px] my-auto">
                        {tasksQuantity}
                    </div>
                </div>

                <div className="flex gap-2 ">
                    <span className="font-bold text-purple">
                        Concluídas
                    </span>
                    <div className="bg-gray-400 rounded-full px-3 text-xs font-bold flex flex-col justify-center h-[19px] my-auto">
                        {completedTasks} de {tasksQuantity}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TasksCount