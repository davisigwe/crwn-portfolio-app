import React from 'react';

import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.jsx';
import Collection from '../collection/Collection.jsx';

function Shop() {
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/" element={<CollectionsOverview />} />
        <Route exact path=":collectionId" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default Shop;
