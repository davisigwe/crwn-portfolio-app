import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartSlice';
import CustomButton from '../custom-button/CustomButton';
import './CollectionItem.scss';

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={handleClick} isInverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
