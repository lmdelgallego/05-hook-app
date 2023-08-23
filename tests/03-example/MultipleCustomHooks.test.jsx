import { render, screen } from  "@testing-library/react";
import  { MultipleCustomHooks } from  "../../src/03-examples/MultipleCustomHooks";

describe('MultipleCustomHooks', () => { 
  test('should render default component', () => { 
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Quotes'))
    expect(screen.getByText('Loading...'))

    const nextButton = screen.getByRole('button')
    expect(nextButton.disabled).toBeTruthy()

    screen.debug();
   })
 })