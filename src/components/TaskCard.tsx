import { TaskType } from './TasksCount'
import Trash from '../assets/Trash.svg'

interface TaskProps {
    task: TaskType;
    onTaskComplete: (id: string, isCompleted: boolean) => void;
    onDeleteTask: (id: string) => void;
}
const TaskCard = ({ task, onTaskComplete, onDeleteTask }: TaskProps) => {
    const handleTaskComplete = (task: { id: string; isCompleted: boolean; }) => {
        const { id, isCompleted } = task
        onTaskComplete(id, isCompleted)
    }

    const handleDeleteTask = (task: {id: string}) => {
        const { id } = task
        onDeleteTask(id)
    }

    return (
        <div className="rounded-lg p-4 my-2 bg-gray-500 flex justify-between gap-3 max-w-[726px] mx-auto border border-gray-400">
            <input 
                type="checkbox" 
                checked={task.isCompleted}    
                onChange={(e) => handleTaskComplete({ id: task.id, isCompleted: e.target.checked})} 
            />
            {task.isCompleted ? (
                <p className="text-left w-full text-gray-300 line-through">{task.description}</p>
            ) : (
                <p className="text-left w-full">{task.description}</p>
            )}
            <img 
                src={Trash} 
                alt="Delete task icon" 
                className="cursor-pointer hover:text-red-400"
                onClick={() => handleDeleteTask({ id: task.id })}
            />

        </div>
    )
}

export default TaskCard