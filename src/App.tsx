import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Inicio from './routes/Home/Inicio';
import Produtos from './routes/Home/Produto';
import Sobre from './routes/Home/Sobre';
import Computadores from './routes/Home/Produto/Computadores';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Navigate to="/inicio" />} />
          <Route path='inicio' element={<Inicio />} />
          <Route path='produto' element={<Produtos />}>
            <Route path='computadores' element={<Computadores />} />
          </Route>

          <Route path='sobre' element={<Sobre />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App















/*

}*/


