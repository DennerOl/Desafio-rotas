import { Outlet } from 'react-router-dom';
import { getLivros } from '../../../../data';
import { Link } from 'react-router-dom';
import './styles.css'




export default function Livros() {

  const livro = getLivros()
  return (
    <>

      {
        livro && <main >
          <section className="computadores container" >
            <div  >
              {livro.map((livro) => (
                <Link className='link-itens'
                  to={`/produto/${livro.number}`}
                  key={livro.number}
                >
                  {livro.name}
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