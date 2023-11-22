import { Outlet } from 'react-router-dom';
import ProductMenu from '../../../componentes/MenuProdutos';
import './styles.css'


export default function Produto() {


  return (
    <main>
      <section className='container'>

        <ProductMenu />

      </section>
      <Outlet />
    </main>
  )
}