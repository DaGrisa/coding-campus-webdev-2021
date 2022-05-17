import { useContext } from 'react';
import CartContext, { CartItem } from '../../store/CartContext';
import Modal from '../UI/Modal';
import './Cart.css';
import CartListItem from './CartListItem';

interface CartProps {
  onHideCart: ()=>void;
}

export default function Cart(props: CartProps){
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler(id: string){
    cartCtx.removeItem(id);
  }

  function cartItemAddHandler(item: CartItem){
    cartCtx.addItem(item);
  }

    const cartItems = (
        <ul className='cart-items'>
        { cartCtx.items.map((item) => (
          <CartListItem 
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onAdd={cartItemAddHandler.bind(null, {...item, quantity: 1})}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
    </ul>);

    return(
        <Modal onHideCart={props.onHideCart}>
            <div className='cart-items'>{cartItems}</div>
            <div className='total'>
                <span>Summe</span>
                <span>{`€ ${cartCtx.totalPrice.toFixed(2)}`}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onHideCart}>Schließen</button>
                {hasItems && <button className='button--alt'>Bestellen</button>}
            </div>
        </Modal>
    );
}