import { useTodoList } from '../context/TodoListContext'
import DeleteIcon from './DeleteIcon'

export const TodoListContent = () => {
    const { data, handleDelete } = useTodoList()

    return (
        <div className="flex justify-center items-center mt-3 flex-col ">
            {data.length > 0 &&
                data.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="py-3 w-72 flex items-center justify-between pr-2 hover:bg-focus ">
                            <div
                                className="pl-3"
                                style={{ wordBreak: 'break-all' }}>
                                {item.name}
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => handleDelete(item.id,item.name)}>
                                <DeleteIcon />
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
