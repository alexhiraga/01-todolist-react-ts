import Clipboard from '../assets/Clipboard.svg'

const EmptyTasks = () => {
    return (
        <>
            <hr className="max-w-[726px] mx-auto border-gray-400" />
            <div className="flex flex-col text-center justify-center my-16">   
                <img src={Clipboard} alt="clipboard" className="w-14 mx-auto mb-4" />
                <p className="text-gray-300 font-bold">
                    Você ainda não tem tarefas cadastradas
                </p>
                <p className="text-gray-300">
                    Crie tarefas e organize seus itens a fazer
                </p>
                
            </div>
        </>
    )
}

export default EmptyTasks