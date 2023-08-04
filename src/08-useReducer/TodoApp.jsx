import { useEffect, useReducer } from 'react'
import { todoReducer, TodoList, TodoAdd } from './'

const initialState = [
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  const handleNewTodo = (todo) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo,
    })
  }

  const handleDelete = (todoId) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: todoId,
    })
  }

  const handleToggleTodo = (todoId) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: todoId,
    })
  }


  return (
    <>
      <h1>TodoApp {todos.length}, <small>pendientes: 2</small> </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleToggleTodo}/>
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

      
    </>
  )
}
