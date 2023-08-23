import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('MultipleCustomHooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useCounter.mockReturnValue({
      counter: 1,
      increment: jest.fn(),
    });
  });

  test('should render default component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Quotes'));
    expect(screen.getByText('Loading...'));

    const nextButton = screen.getByRole('button');
    expect(nextButton.disabled).toBeTruthy();
  });

  test('should be show a quote', () => {
    useFetch.mockReturnValue({
      data: [{ _id: 1, author: 'Luis Miguel', content: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button');
    expect(screen.getByText('Hola Mundo')).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should be call increment', () => {
    useFetch.mockReturnValue({
      data: [{ _id: 1, author: 'Luis Miguel', content: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button');
    nextButton.click();
    expect(useCounter().increment).toHaveBeenCalled();
  });
});
