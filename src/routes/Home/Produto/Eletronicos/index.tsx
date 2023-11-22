import { Outlet } from 'react-router-dom';
import { getEletro } from '../../../../data';
import { Link } from 'react-router-dom';
import './styles.css'




export default function Eletro() {

  const eletro = getEletro()
  return (
    <>

      {
        eletro && <main >
          <section className="computadores container" >
            <div  >
              {eletro.map((eletroId) => (
                <Link className='link-itens'
                  to={`/produto/${eletroId.number}`}
                  key={eletroId.number}
                >
                  {eletroId.name}
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