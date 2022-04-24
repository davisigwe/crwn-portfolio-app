import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleHideCart } from '../../redux/cart/cartSlice';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';

function CartDropdown() {
  const isHidden = useSelector((state) => state.cart.isHidden);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('checkout');
    dispatch(toggleHideCart());
  };

  return (
    !isHidden && (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty.</span>
          )}
        </div>
        <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
      </div>
    )
  );
}

export default CartDropdown;
