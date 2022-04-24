import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  decreaseItemQuantity,
  deleteItemFromCart,
} from '../../redux/cart/cartSlice';
import './CheckoutItem.scss';

function CheckoutItem({ item }) {
  const { imageUrl, name, price, quantity } = item;
  const dispatch = useDispatch();

  const handleDeleteItemFromCart = () => {
    dispatch(deleteItemFromCart(item));
  };

  const handleDecreaseItemQuantity = () => {
    dispatch(decreaseItemQuantity(item));
  };

  const handleIncreaseItemQuantity = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={handleDecreaseItemQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncreaseItemQuantity}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleDeleteItemFromCart}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
