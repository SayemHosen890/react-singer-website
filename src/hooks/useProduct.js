import { useEffect } from "react"
import { useState } from "react"

const useProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    //return necessary things
    return [product, setProduct];
}

export default useProduct;