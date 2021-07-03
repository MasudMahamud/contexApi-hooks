import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Catagories from '../Catagories/Catagories';

const Home = () => {
   const category = useContext(CategoryContext);
    return (
        <div style={{border:'1px solid red'}} >
            <h2>This is Home: {category}</h2>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;