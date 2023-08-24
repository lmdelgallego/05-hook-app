import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('HomePage Component', () => {
  const user = {
    id: 1,
    name: 'Luis Miguel',
    email: 'lmdelgallego@gmail.com'
  };

  test('Should be render correctly', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    // screen.debug();
  });

  test('Should be show correcty user info', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
    // screen.debug();
  });
});
