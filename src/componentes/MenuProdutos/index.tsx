import { NavLink } from 'react-router-dom';
import './styles.css'

export default function ProductMenu() {
  return (

    <div className='container'>
      <div className='cardNavLink'>
        <nav className='navLinkContainer'>
          <div className='product-menu-item'>
            <NavLink to={'/produto/computadores'} className={({ isActive }) => isActive ? "menu-active" : "menu-item-produto"} >
              Computadores
            </NavLink>
          </div>
          <div className='product-menu-item'>
            <NavLink to={'/produto/eletronicos'} className={({ isActive }) => isActive ? "menu-active" : "menu-item-produto"} >
              Eletrônicos
            </NavLink>
          </div>
          <div className='product-menu-item'>
            <NavLink to={'/produto/livros'} className={({ isActive }) => isActive ? "menu-active" : "menu-item-produto"} >
              Livros
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}