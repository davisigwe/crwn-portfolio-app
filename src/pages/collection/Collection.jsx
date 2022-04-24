import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-tem/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelector';

import './Collection.scss';

function Collection() {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
