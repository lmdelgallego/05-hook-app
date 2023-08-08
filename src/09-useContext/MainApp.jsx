import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage, NavBar } from './';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {

  return (
    <UserProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  )
}
