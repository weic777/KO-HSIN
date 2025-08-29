import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import WorkPage from './pages/WorkPage';

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/home'; // HomePage 不顯示 Footer

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
