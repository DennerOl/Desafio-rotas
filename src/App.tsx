import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Inicio from './routes/Home/Inicio';
import Produtos from './routes/Home/Produto';
import Sobre from './routes/Home/Sobre';
import Computadores from './routes/Home/Produto/Computadores';
import Eletronicos from './routes/Home/Produto/Eletronicos';
import Livros from './routes/Home/Produto/Livros';
import NotFound from './routes/NotFound';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>

          <Route path='inicio' element={<Inicio />} />
          <Route path='produto' element={<Produtos />}>
            <Route path='computadores' element={<Computadores />} />
            <Route path='eletronicos' element={<Eletronicos />} />
            <Route path='livros' element={<Livros />} />
          </Route>
          <Route path='sobre' element={<Sobre />} />
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App















/*

}*/


