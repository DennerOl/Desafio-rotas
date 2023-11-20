import { NavLink } from 'react-router-dom'
import './styles.css'
import casa from '../../assets/img/casa3.png'
import { Link } from 'react-router-dom'
export default function Header() {

  return (
    <header>
      <div className='header2 container'>
        <div>
          <nav className='navbar'>

            <NavLink to="/" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
              Início
            </NavLink>
            <NavLink to="/produto" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
              Produtos
            </NavLink>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
              Sobre nós
            </NavLink>
          </nav>
        </div>

        <div className='iconecasa'>
          <Link to="/inicio">
            <img src={casa} alt="casinha" />
          </Link>
        </div>
      </div>

    </header>
  )
}