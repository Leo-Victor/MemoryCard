import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import MemoryGame from './pages/MemoryGame';


// HashRouter: dùng cho GitHub Pages vì không cần server config
// Mỗi Route tương ứng 1 trang trong app
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/game" replace />} />
        <Route path="/game" element={<MemoryGame />} />
      </Routes>
      {/* Các trang khác */}
    </HashRouter>
  );
}

export default App;
