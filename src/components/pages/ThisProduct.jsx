import { useParams } from "react-router-dom";

function ThisProduct() {
    const { thisproductid } = useParams();

    return <div>ciao</div>;
}

export default ThisProduct;

