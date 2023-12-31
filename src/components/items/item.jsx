import React, { useContext } from 'react';
import CartContext from '../store/meal_context';
import Form from './Item_form';
import classes from './style.module.css';

function Item(props) {
  const ctx = useContext(CartContext);

  const addToCartHandler = ilosc => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: Number(ilosc),
      price: props.price,
      img: props.img,
      author: props.author,
    });
    console.log(ctx.items);
  };

  return (
    <li className={classes.item} id={props.id}>
      <div className={classes.isix}>
        <img src={props.img} alt={props.name} className={classes.imga} />
      </div>

      <div className={classes.scc}>
        <div className={classes.fst}>
          <h2 className={classes.name}>{props.author} {props.name}</h2>
          <h4 className={classes.price}>${props.price}</h4> 
        </div>
        <div className={classes.form}>
          <Form id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>


    </li>
  );
}

export default Item;
