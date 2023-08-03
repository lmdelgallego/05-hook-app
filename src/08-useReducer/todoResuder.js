export const todoReducer = (initialStade, action ) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialStade, action.payload];
      break;
    // case 'delete':
    //   return initialStade.filter(todo => todo.id !== action.payload);
    // case 'toggle':
    //   return initialStade.map(todo =>
    //     (todo.id === action.payload)
    //       ? {...todo, done: !todo.done}
    //       : todo
    //   )
    // case 'toggle-old':
    //   return initialStade.map(todo => {
    //     if (todo.id === action.payload) {
    //       return {
    //         ...todo,
    //         done: !todo.done
    //       }
    //     } else {
    //       return todo;
    //     }
    //   }
    //   )
    default:
      return initialStade;
    }
} 