import { useReducer } from 'react'
import { todoReducer, TodoList, TodoAdd } from './'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false,
  },
  {
    id: new Date().getTime() + 1,
    description: 'Aprender Mongo',
    done: false,
  }
]

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleNewTodo = (todo) => {
    console.log({todo})
    dispatch({
      type: 'add',
      payload: todo,
    })
    
  }


  return (
    <>
      <h1>TodoApp 10, <small>pendientes: 2</small> </h1>

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
