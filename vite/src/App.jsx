import { useState } from 'react'
import './styles.css'
import { Todo } from './Todo'

export default function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState([])
  const [idTodo, setIdTodo] = useState(0)

  function addNewTodo() {
    if (todoInput !== '') {
      setIdTodo(currentIdTodo => {
        return currentIdTodo + 1
      })

      const todoProces = {}

      todoProces.name = todoInput
      todoProces.id = idTodo

      setTodos(currentTodos => {
        return [...currentTodos, todoProces]
      })

      setTodoInput('')
    }
  }

  function handDeleteTodo(idTodo) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== idTodo)
    })
  }

  return (
    <>
      <ul>
        {todos.map(todo => <Todo key={todo.id} name={todo.name} idTodo={todo.id} handDeleteTodo={handDeleteTodo} />)}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input type="text" id="todo-input" value={todoInput} onChange={e => setTodoInput(e.target.value)} />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  )
}