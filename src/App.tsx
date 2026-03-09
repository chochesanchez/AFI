import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fanatic from './pages/Fanatic'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fanatic" element={<Fanatic />} />
    </Routes>
  );
}

export default App
