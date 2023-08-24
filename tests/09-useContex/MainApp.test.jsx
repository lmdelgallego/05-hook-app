import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext';
import { MemoryRouter } from 'react-router-dom';

describe('MainApp', () => {
  test('should be show HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('HomePage,')).toBeTruthy();
  });
  test('should be show LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
});
