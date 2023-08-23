import { TodoList, TodoAdd } from './';
import { useTodo } from '../hooks';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const { todos, todosCount, pendingTodo, handleNewTodo, handleDelete, handleToggleTodo } =
    useTodo();

  return (
    <>
      <h1>
        TodoApp {todosCount}, <small>pendientes: {pendingTodo}</small>{' '}
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
