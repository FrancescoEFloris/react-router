import { useParams } from "react-router-dom";

function ThisProduct() {
    const { id } = useParams();

    return <div>ciao</div>;
}

export default ThisProduct;

