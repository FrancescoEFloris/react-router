import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ThisProduct from './ThisProduct';

function OurProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(json => {
                setProducts(json);
            })
    }, []);


    return (
        <div className='container prod-wrapper'>
            <div className="row row-cols-1">
                {products.map(product => (
                    <div key={product.id} className='col prod-card'>
                        <Link  to={`/product/${product.id}`} element={<ThisProduct />} >
                            <img src={product.image} alt={product.title} className='prod-img' />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurProducts;