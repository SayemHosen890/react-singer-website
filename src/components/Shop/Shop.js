// import { logDOM } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addProduct = products.find(product => product.key === key)
                if (addProduct) {
                    const quantity = savedCart[key];
                    addProduct.quantity = quantity;
                    storedCart.push(addProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        //save to local storage (for now)
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProduct);
        console.log(matchedProduct.length);
    }

    return (
        <>
            <div className='search-container'>
                <input type="text" onChange={handleSearch} placeholder='search product' />
            </div>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        displayProduct.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;