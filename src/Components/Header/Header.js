import { useContext } from 'react';
import { CategoryContext } from '../../App';
import { Button } from '@material-ui/core';
import './Header.css'


const Header = (props) => {
    const [category,setCategory ]= useContext(CategoryContext);
    return (
        <div className="header">
            <h2>This is Header: {category}</h2>
            <Button variant="contained" onClick={()=> setCategory('laptop')} >Laptop</Button>
            <Button variant="contained" onClick={()=> setCategory('mobile')} >Mobile</Button>
            <Button variant="contained" onClick={()=> setCategory('camera')} >Camera</Button>
        </div>
    );
};

export default Header;