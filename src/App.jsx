import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Hi from './pages/Hi.jsx'
import Hello from './pages/Hello.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Hi" element={<Hi />} />
        <Route path="/Hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  )
}