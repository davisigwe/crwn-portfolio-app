import { createSelector } from '@reduxjs/toolkit';

const selectAllCollections = createSelector(
  (state) => state.shop,
  (shop) => shop.collections
);

export const selectCollection = (urlParams) =>
  createSelector(
    [selectAllCollections],
    (collections) => collections[urlParams]
  );

export const selectCollectionsForPreview = createSelector(
  [selectAllCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
