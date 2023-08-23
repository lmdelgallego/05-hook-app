import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('TodoApp', () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Aprender React',
        done: true,
      },
      {
        id: 2,
        description: 'Aprender Mongo',
        done: false,
      },
    ],
    todosCount: 2,
    pendingTodo: 2,
    handleNewTodo: jest.fn(),
    handleDelete: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('should be render correctly ', () => {
    render(<TodoApp />);
    const title = screen.getByRole('heading', { name: 'title' });
    expect(title).toBeTruthy();
    expect(title.innerHTML).toContain('TodoApp 2');
    expect(title.innerHTML).toContain('pendientes: 2');
  });
});
