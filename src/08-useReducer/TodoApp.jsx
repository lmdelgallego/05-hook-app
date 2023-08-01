import { useReducer } from 'react'
import { todoReducer } from './todoResuder'

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
  },
  {
    id: new Date().getTime() + 1,
    desc: 'Aprender Mongo',
    done: false,
  }
]

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)


  return (
    <>
      <h1>TodoApp 10, <small>pendientes: 2</small> </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <ul className='list-group'>
            {
              todos.map( todo => (
                <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                  <span className='align-self-center'>{ todo.desc }</span>
                  <button className='btn btn-danger'>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <form>
            <input 
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              className="form-control"
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>

          </form>
        </div>
      </div>

      
    </>
  )
}
