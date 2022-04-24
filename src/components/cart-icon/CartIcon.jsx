import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { toggleHideCart } from '../../redux/cart/cartSlice';
import './CartIcon.scss';

function CartIcon() {
  const counter = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleHideCart());
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{counter}</span>
    </div>
  );
}

export default CartIcon;
