import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

const ProductList = () => {


    const [products, setProducts] = useState([])
    const [productsByPage, setProductsByPage] = useState(3)/* 6 productos por pagina */
    const [currentPage, setCurrentPage] = useState(1)/* iniciar en uno */

    // Para mostrar productos divididos por páginas
    /* productsByPage inicia en 6 y currentPage inicia en 1  */
    const lastIndex = currentPage * productsByPage // 1 * 6 = 6
    const firstIndex = lastIndex - productsByPage // 6 - 6 = 0

    /* Total de productos almacenará el total de products que vengan de la api */
    const totalProducts = products.length

    const productList = async() => {
        const data = await fetch('https://fakestoreapi.com/products')
        const products = await data.json()
      
        setProducts(products)
    }
    useEffect(() => {
        productList()
    }, [])

    return( 
        <>
         <div className="container-products">
            {products.map(product => (
                <div className="card-product container" key={product.id}>
                    <figure className="container-img">
                        <img src={product.image} alt={product.title} />
                    </figure>
                    <div className="info-product">
                        <h6>{product.title}</h6>
                        <p className="price"> $ {product.price}</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            )).slice(firstIndex, lastIndex)}
         </div>
         <Pagination 
         productsByPage={productsByPage} 
         currentPage={currentPage} 
         setCurrentPage={setCurrentPage} 
         totalProducts={totalProducts}
         />
        </>
    )
}
export default ProductList;