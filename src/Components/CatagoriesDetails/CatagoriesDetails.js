import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './CategoriesDetails.css';

const CatagoriesDetails = (props) => {
    const category = useContext(CategoryContext);
    const {name,price} = props.product;
    return (
        <div className="product-details">
            <h4>This is CatagoriesDetails: {category}</h4>
            <h5>selected product name: {name}</h5>
            <p>Price : {price}</p>
        </div>
    );
};

export default CatagoriesDetails;