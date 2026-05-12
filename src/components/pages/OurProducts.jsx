import { useState, useEffect } from 'react';

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
            <div className="row row-cols-2">
                {products.map(product => (
                    <div key={product.id} className='col prod-card'>
                        <img src={product.image} alt={product.title} className='prod-img'/>
                        <h3>{product.title}</h3>
                        <p><strong>Prezzo:</strong> {product.price}€</p>
                        <button>Compra Ora</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurProducts;