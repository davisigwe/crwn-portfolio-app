import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import CollectionPreview from '../collection-preview/CollectionPreview';
import './CollectionsOverview.scss';

function CollectionsOverview() {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
}

export default CollectionsOverview;
