import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage, NavBar } from './';

export const MainApp = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  )
}
