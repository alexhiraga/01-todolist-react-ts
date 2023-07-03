import Logo from '../assets/Logo.svg'
import PlusIcon from '../assets/PlusIcon.svg'
import { useState } from 'react'

interface TaskProps {
    onCreateTask: (description: string) => void;
}

const Header = ({onCreateTask}: TaskProps) => {
    const [taskDescription, setTaskDescription] = useState('')

    const handleCreateTask = () => {
        onCreateTask(taskDescription)
        setTaskDescription('')
    }

    return (
        <div className="mb-16 ">
            <div className="bg-gray-700 h-[200px] w-full flex flex-col justify-center">
                <img src={Logo} alt="logo" className="mx-auto align-middle -mt-8" />
            </div>
            <div className="flex justify-center gap-2 -mt-8">
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    className="w-[638px]"
                    value={taskDescription} 
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
                <button className="transition-colors" onClick={handleCreateTask}>
                    <span className="flex gap-2">
                        Criar
                        <img src={PlusIcon} alt="plus-icon" />
                    </span>
                </button>
            </div>

        </div>
    )
}

export default Header