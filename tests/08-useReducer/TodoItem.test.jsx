import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Learn React',
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement).toBeTruthy();
    expect(liElement.className).toContain('list-group-item');
    const spanElement = screen.getByLabelText('span-description');
    expect(spanElement).toBeTruthy();
    expect(spanElement.textContent).toBe(todo.description);
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should show todo item completed', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement).toBeTruthy();
    const spanElement = screen.getByLabelText('span-description');
    expect(spanElement).toBeTruthy();
    expect(spanElement.textContent).toBe(todo.description);
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should call onDeleteTodo when click on delete button', () => {
    todo.done = false;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeTruthy();
    deleteButton.click();
    expect(onDeleteTodoMock).toHaveBeenCalledTimes(1);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('should call onToggleTodo when double click on todo item', () => {
    todo.done = false;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement).toBeTruthy();
    fireEvent.dblClick(liElement);
    expect(onToggleTodoMock).toHaveBeenCalledTimes(1);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
