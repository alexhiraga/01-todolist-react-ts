import { useState } from 'react'
import Header from './components/Header'
import TasksCount, { TaskType } from './components/TasksCount'
import TaskCard from './components/TaskCard'
import { v4 as uuidv4} from 'uuid'
import EmptyTasks from './components/EmptyTasks'


function App() {
    const [tasks, setTasks] = useState<TaskType[]>([])

    const reversedTasks = tasks && [...tasks].reverse()

    const handleCompleteTask = (id: string, isCompleted: boolean) => {
        const updatedTasks = tasks && tasks.map(task => {
            if(task.id === id) {
                return {
                    ...task,
                    isCompleted: isCompleted
                }
            }
            return task
        })
        setTasks(updatedTasks)
    }

    const handleDeleteTask = (id: string) => {
        const updatedTasks = tasks && tasks.filter(task => {
            if(task.id !== id) return task
        })
        setTasks(updatedTasks)
    }

    const handleCreateTask = (description: string) => {
        const newTask = {
            id: uuidv4(),
            description,
            isCompleted: false
        }
        if(tasks) setTasks([...tasks, newTask])
    }

    return (
        <div className="text-center mx-auto">
            <Header onCreateTask={handleCreateTask} />
            <TasksCount tasks={tasks} />
            <div className="mt-5">
                {tasks && tasks.length ? (
                    reversedTasks && reversedTasks.map(task => {
                        return (
                            <TaskCard 
                                task={task} 
                                onTaskComplete={handleCompleteTask} 
                                onDeleteTask={handleDeleteTask}    
                            />
                        )
                    })
                ) : (
                    <EmptyTasks />
                )}
            </div>
        </div>
    )
}

export default App
