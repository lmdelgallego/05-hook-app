import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter', () => {

  test('should be return default values', () => {    
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(10);
    expect(typeof increment).toBe('function');
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });


  test('should be return counter with value 100', () => {    
    const { result } = renderHook(() => useCounter(100));
    const { counter} = result.current;
    expect(counter).toBe(100);
  });

  test('should be increment counter in 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;
    expect(counter).toBe(100);
    
    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);

  });

  test('should be decrement counter in 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;
    expect(counter).toBe(100);
    
    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(98);

  });

  test('should be decrement counter in 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment, reset } = result.current;
    expect(counter).toBe(100);
    
    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(100);

  });

});