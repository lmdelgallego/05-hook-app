import { useEffect, useReducer } from 'react'
import { todoReducer, TodoList, TodoAdd } from './'

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Aprender React',
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() + 1,
  //   description: 'Aprender Mongo',
  //   done: false,
  // }
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


  return (
    <>
      <h1>TodoApp {todos.length}, <small>pendientes: 2</small> </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
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
