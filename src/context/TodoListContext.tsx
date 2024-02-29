import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from 'react'

type TodoListProviderProps = {
    children: ReactNode
}

type TodoListContext = {
    data: {
        id: string
        name: string
    }[]
    todoId: number
    setTodoId: (value: number) => void
    handleDelete: (id: string, name: string) => void
}

type Data = {
    id: string
    name: string
}

const TodoListContext = createContext({} as TodoListContext)

export function useTodoList() {
    return useContext(TodoListContext)
}

export function TodoListProvider({ children }: TodoListProviderProps) {
    const todoList = localStorage.getItem('todoList')
        ? JSON.parse(localStorage.getItem('todoList') || '')
        : ''

    const [todoId, setTodoId] = useState(1)
    const [data, setData] = useState<Data[]>([...todoList])

    const handleDelete = (id: string,name: string) => {
        if (window.confirm(`確定刪除${name}嗎?`)){
            const deleteData = data.filter((item) => {
                return item.id !== id
            })
            localStorage.setItem('todoList', JSON.stringify([...deleteData]))
            setData([...deleteData])
        }
        else{
            return
        }
    }

    useEffect(() => {
        if (todoList.length > 0) {
            setData([...todoList])
            setTodoId(Number(todoList[todoList.length - 1].id) + 1)
        }
    }, [todoId])

    useEffect(() => {
        if (todoList.length === 0 && todoId === 0) {
            setData([...todoList])
        }
    }, [todoList])

    return (
        <TodoListContext.Provider
            value={{ data, todoId, setTodoId, handleDelete }}>
            {children}
        </TodoListContext.Provider>
    )
}
