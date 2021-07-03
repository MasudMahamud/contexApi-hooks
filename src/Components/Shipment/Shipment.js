import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const category = useContext(CategoryContext); 
    return (
        <div>
            <h2>This is Shipment: {category}</h2>
        </div>
    );
};

export default Shipment;