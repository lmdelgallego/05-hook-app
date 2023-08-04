export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {

  return (
    <li key={todo.id} className='list-group-item d-flex justify-content-between' style={{ cursor: 'pointer'}} onDoubleClick={ () => onToggleTodo(todo.id)}>
      <span className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''} `}>{todo.description}</span>
      { !todo.done && <button className='btn btn-danger' onClick={() => onDeleteTodo(todo.id)}>Delete</button>}
    </li>
  )
}
