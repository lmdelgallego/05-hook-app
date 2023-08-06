import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, AboutPage, LoginPage } from './';

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr />
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
