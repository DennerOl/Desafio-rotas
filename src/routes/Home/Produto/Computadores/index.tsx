import { Outlet } from 'react-router-dom';
import { getProducts } from '../../../../data';
import { Link } from 'react-router-dom';
import './styles.css'




export default function Computadores() {

  const produto = getProducts()
  return (
    <>

      {
        produto && <main >
          <section className="computadores container" >
            <div  >
              {produto.map((prods) => (
                <Link className='link-itens'
                  to={`/produto/${prods.number}`}
                  key={prods.number}
                >
                  {prods.name}
                </Link>
              ))}
            </div>

          </section>
          <Outlet />
        </main>
      }
    </>
  );



}