// import { logDOM } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { Link } from 'react-router-dom';
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
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

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
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className='regular-btn'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;