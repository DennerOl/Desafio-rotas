import { Outlet } from 'react-router-dom';
import { getProducts } from '../../../../data';
import { Link } from 'react-router-dom';
import './styles.css'




export default function Computadores() {
  // const params = useParams();

  //const produto = getProduto(Number(params.produtoId));
  const produto = getProducts()
  return (
    <>

      {
        produto && <main >
          <section className="computadores container" >
            <div  >
              {produto.map((prods) => (
                <Link
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


  /* return (
     <main>
       <section className='container'>
 
         <h2 className='bemVindo section-title mt-20'>
           conteudo!!!
         </h2>
         <Outlet />
       </section>
 
     </main>
 
 */
  /*
    
    */

}