import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('UseForm', () => { 
  const initialForm = {
    name: 'Juan',
    email: 'email@email.com'
  }

  test('should be return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({...initialForm, formState: initialForm, onInputChange: expect.any(Function), onResetForm: expect.any(Function)});
  });

  test('should be change name on formState', () => {
    const newName = 'Luis';
    const { result } = renderHook(() => useForm(initialForm));
    act(() => {
      result.current.onInputChange({target: {name: 'name', value: newName}})
    });
    expect(result.current.name).toBe(newName);
    expect(result.current.formState).toEqual({...initialForm, name: newName});
  });

  test('should be reset formState', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({target: {name: 'name', value: 'Luis'}})
      onResetForm();
    });
    expect(result.current.formState).toEqual(initialForm);
  });
})