
const initialState = [{
  id: 1,
  todo: 'Recolactar las piedras del infinito',
  done: false
}]

const todoReducer = (state = initialState, action = {}) => {  

  if (action.type === '[TODO] add todo') {
    return [...state, action.payload];
  }

  return state;
}


let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolctar la piedra del alma',
  done: false
}

todos = todoReducer(todos, {
  type: '[TODO] add todo',
  payload: newTodo
})

console.log({state: todos});