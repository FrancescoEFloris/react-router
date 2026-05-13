import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function ThisProduct() {
    const { thisproductid } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${thisproductid}`)
            .then(response => response.json())
            .then(json => setProduct(json));
    }, [thisproductid]);

    if (!product) return <h2 className="container">Loading</h2>;

    return (
        <div>
            <img src={product.image} alt={product.title}/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        </div>
    );
}

export default ThisProduct;

