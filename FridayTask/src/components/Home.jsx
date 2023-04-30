import { useState , useEffect, Fragment } from "react";
import Product from "./Product";
export default function Home(props)
{
    const [products , setProducts] = useState([]);

    const getProducts = async() => {
        const response = await fetch('https://dummyjson.com/products/');
        const data = await response.json();
        const productDetails = data.products.map(pd => {
            return{
                id : pd.id,
                title : pd.title,
                price : pd.price,
                thumbnail : pd.thumbnail
            }
        });
        console.log(productDetails);
        setProducts(productDetails);
    }
    useEffect(()=>{
        getProducts();
    }, []);
    console.log(products);

    const list = products.map(p => {
        return <Product data = {p}/>
    });
    return(
        <Fragment>
            <h1>{props.name}</h1>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row d-flex gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            {list}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    ); 
}