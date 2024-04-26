import { useState, useRef, useEffect } from 'react'
import { Todo } from './TodoItem'
import './styles.css'

export default function App() {
  const todoInput = useRef('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoInput.current.focus()
  }, [])

  const addNewTodo = () => {
    if (todoInput.current !== '') {
      setTodos(currentTodos => {
        return [...currentTodos, { id: new Date(), name: todoInput.current }]
      })
    }
  }

  const handleDeleteTodo = (todoId) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <>
      <ul id="list">
        {todos.map(todo => <Todo key={todo.id} name={todo.name} todoId={todo.id} handleDeleteTodo={handleDeleteTodo} />)}
      </ul>

      <div id='new-todo-form'>
        <label htmlFor='todo-input'>New Todo</label>
        <input type="text" id="todo-input" ref={todoInput} onChange={e => todoInput.current = e.target.value} />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  )
}