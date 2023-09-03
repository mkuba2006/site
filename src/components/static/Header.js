import { useContext, useEffect, useState } from 'react';
import classes from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../components/store/meal_context';

function Header(props) {
    const ctx = useContext(CartContext);
    const {items} = ctx; 
    useEffect(()=>{},[items])

    const length = items.reduce((cur, el)=>{
        return cur + Number(el.amount);
    },0)

    return (
        <nav className={classes.name}>
            <h1>Men site</h1>
            <button onClick={props.onClick}>
                <FontAwesomeIcon icon={faShoppingCart}/>
                <span> Cart</span>
                <span> {length}</span>
            </button>
        </nav>
    );
}

export default Header;