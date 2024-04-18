//1 Add new todo to list todo
import { useState } from 'react'
import './styles.css'
import { Todo } from './Todo'

export default function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todoProces, setTodoProces] = useState({})
  const [listTodos, setListTodos] = useState([])
  let [idTodo, setIdTodo] = useState(0)

  function addNewTodo(addTodo) {
    if (todoInput !== '') {
      setIdTodo(currentIdTodo => {
        return currentIdTodo + 1
      })

      todoProces.name = addTodo
      todoProces.id = idTodo

      setListTodos(currentListTodos => {
        return [...currentListTodos, todoProces]
      })

      setTodoProces({})
      setTodoInput('')
    }
  }

  return (
    <>
      <ul>
        {listTodos.map(todo => {
          return <Todo key={todo.id} newtodo={todo.name} />
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input" id='todo-input'>New Todo</label>
        <input type="text" id="todo-input" value={todoInput} onChange={e => setTodoInput(e.target.value)} />
        <button onClick={() => addNewTodo(todoInput)}>Add Todo</button>
      </div>

    </>
  )
}
