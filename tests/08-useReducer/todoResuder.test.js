import { todoReducer } from '../../src/08-useReducer/todoResuder';

describe('TodoReducer', () => {
  const initialState = [
    {
      id: 1,
      desc: 'Learn React',
      done: false,
    },
  ];

  test('should return default state', () => {
    const state = todoReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test('should add a todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        desc: 'Learn Angular',
        done: false,
      },
    };
    const state = todoReducer(initialState, action);
    expect(state).toEqual([...initialState, action.payload]);
    expect(state.length).toBe(2);
    expect(state).not.toEqual(initialState);
    expect(state).toContain(action.payload);
  });

  test('should delete a todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    };
    const state = todoReducer(initialState, action);
    expect(state.length).toBe(0);
    expect(state).toEqual([]);
  });

  test('should toggle a todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };
    const state = todoReducer(initialState, action);
    expect(state[0].done).toBe(true);
    expect(state[0]).toEqual({
      id: 1,
      desc: 'Learn React',
      done: true,
    });
  });
});
