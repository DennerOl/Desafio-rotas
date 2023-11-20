import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Produto from './routes/Home/Produto'
import Sobre from './routes/Home/Sobre'
import Home from './routes/Home'
import Inicio from './routes/Home/Inicio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Navigate to="/inicio" />} />
          <Route path='inicio' element={<Inicio />} />
          <Route path='produto' element={<Produto />} />
          <Route path='sobre' element={<Sobre />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
