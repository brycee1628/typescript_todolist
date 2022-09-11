import React from 'react'
import { TodoListHeader } from './components/TodoListHeader'
import { TodoListBody } from './components/TodoListBody'
import { TodoListContent } from './components/TodoListContent'
import { TodoListProvider } from './context/TodoListContext'
const App = () => {
    return (
        <TodoListProvider>
            <TodoListHeader />
            <TodoListBody />
            <TodoListContent />
        </TodoListProvider>
    )
}

export default App
