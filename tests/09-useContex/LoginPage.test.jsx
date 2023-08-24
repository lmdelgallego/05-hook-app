import { render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('LoginPage Component', () => {
  test('Should be render correctly', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    // screen.debug();
  });
  test('Should be call setUser when button is clicked', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole('button');
    button.click();
    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledTimes(1);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 1,
      name: 'Luis Miguel Del Gallego',
      email: 'lmdelgallego@gmail.com'
    });
    // screen.debug();
  });
});
