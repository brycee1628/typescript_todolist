import { ChangeEvent, useEffect, useState } from 'react'
import { useTodoList } from '../context/TodoListContext'

export const TodoListBody = () => {
    const [todoValue, setTodoValue] = useState('')

    const { todoId, setTodoId, data } = useTodoList()
    const todoList = localStorage.getItem('todoList')
        ? JSON.parse(localStorage.getItem('todoList') || '')
        : ''

    const handleTodoValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value)
    }

    const handleAddTodo = () => {
        if (todoValue !== '') {
            setTodoId(Number(todoId + 1))
            setTodoValue('')
            localStorage.setItem(
                `todoList`,
                JSON.stringify([
                    ...todoList,
                    {
                        id: todoId.toString(),
                        name: todoValue,
                    },
                ])
            )
        }
    }

    const hacndleAllDelete = () => {
        if (data.length > 0) {
            if (window.confirm('確定全部刪除嗎?')) {
                localStorage.clear()
                setTodoId(0)
            } else {
                return
            }
        }
    }

    useEffect(() => {
        localStorage.setItem(`todoList`, JSON.stringify([...todoList]))
    }, [])

    return (
        <div className="mt-3 flex justify-center">
            <input
                type="text"
                placeholder="輸入事項 ..."
                className="border rounded pl-2 mr-3 "
                value={todoValue}
                onChange={(e) => handleTodoValue(e)}
            />
            <button
                className="border rounded bg-main p-2 text-main-txt mr-1"
                onClick={() => handleAddTodo()}>
                新增
            </button>
            <button
                className="border rounded p-2  hover:bg-delete hover:text-main-txt"
                onClick={() => hacndleAllDelete()}>
                全部刪除
            </button>
        </div>
    )
}
