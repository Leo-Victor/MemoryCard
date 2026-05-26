import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import MemoryGame from './pages/MemoryGame';



// Mỗi Route tương ứng 1 trang trong app
function App() {
  return (
    <BrowserRouter basename="/MemoryCard">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/game" replace />} />
        <Route path="/game" element={<MemoryGame />} />
      </Routes>
      {/* Các trang khác */}
    </BrowserRouter>
  );
}

export default App;
