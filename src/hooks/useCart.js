import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = product => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (product.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = product.find(product => product.key === key);
                if (addedProduct) {
                    //set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [product]);

    return [cart, setCart];
}

export default useCart;