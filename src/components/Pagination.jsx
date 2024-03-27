

export const Pagination = ({productsByPage, totalProducts, currentPage, setCurrentPage}) => {

    const pageNumbers = []
 /* Para ver la cantidad de productos que se deben mostrar en cada pagina */
/* console.log(Math.ceil(totalProducts / productsByPage)) */
  
    for(let i = 1; i <= Math.ceil(totalProducts / productsByPage); i++) {
        pageNumbers.push(i)
    }

    const Previus = () => {
        /*-1 indica que volveré a la página anterior */
        setCurrentPage(currentPage - 1) /* Mi nuevo estado será página actual menos 1*/
    }
    const Next = () => {
        setCurrentPage(currentPage + 1) 
    }
    /* Al hacer click en cualquier numero */
    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }
    return(
    <>
    <nav aria-label="...">
                <ul className="pagination justify-content-center" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                <li className="page-item">
                        <a className='page-link' style={{cursor:"pointer"}} 
                        onClick={Previus}
                        >
                            Anterior</a>
                    </li>
                    {pageNumbers.map(noPage => (
                        <li key={noPage} 
                        style={{ margin: '0 5px' }} 
                        /* Funcion para poder hacer clic en cualquier número */
                        onClick={() => onSpecificPage(noPage)}>
                            <a
                                className={`page-link pagination-link ${noPage === currentPage ? 'active' : ''}`}
                                onClick={() => setCurrentPage(noPage)}
                                >
                             
                                {noPage}
                            </a>
                               
                        </li>
                    ))} 
                    <li className="page-item">
                        <a className="page-link" style={{cursor:"pointer"}} onClick={Next}>Siguiente</a>
                    </li>
                </ul>
            </nav>
     </>
    )
}