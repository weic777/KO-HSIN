import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import WorkPage from './pages/WorkPage';

function App() {
  const location = useLocation();

  // 在 HomePage (/home) 不顯示 Nav 和 Footer
  const showLayout = location.pathname !== '/home';

  return (
    <>
      {showLayout && <Nav />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

export default App;
