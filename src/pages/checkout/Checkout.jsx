import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';
import './Checkout.scss';

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>

      <div className="test-warning">
        *Please use the following test credit card for payment:
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>

      <div className="button">
        <StripeButton price={cartTotal} />
      </div>
    </div>
  );
}

export default Checkout;
