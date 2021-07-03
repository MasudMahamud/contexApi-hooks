import React, { useState, useContext, useEffect } from 'react';
import { CategoryContext } from '../../App';
import CatagoriesDetails from '../CatagoriesDetails/CatagoriesDetails';
import './Catagories.css';

const allProducts = [
    {name:'Lenovo', price:'32,000', category:'laptop'},{name:'Dell', price:'38,000', category:'laptop'},{name:'Hp',price:'29,000', category:'laptop'},
    {name:'Samsung', price:'30,000', category:'mobile'},{name:'Nokia', price:'18,000', category:'mobile'},{name:'Apple', price:'132,000', category:'mobile'},
    {name:'Sony', price:'42,000', category:'camera'},{name:'Canon', price:'35,000', category:'camera'},{name:'Nikhon', price:'69,000', category:'camera'}
]

const Catagories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const matchedProduct = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProduct);
    },[category])
    return (
        <div className="product-style">
            <h4>Select catagories : {category} </h4>
            {
                products.map(pd => <CatagoriesDetails product={pd}></CatagoriesDetails> )
            }
        </div>
    );
};

export default Catagories;