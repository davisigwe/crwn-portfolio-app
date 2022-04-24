import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import userReducer from './user/userSlice';
import cartReducer from './cart/cartSlice';
import directoryReducer from './directory/directorySlice';
import shopReducer from './shop/shopSlice';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

// Store
export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: true,
});

export const persistor = persistStore(store);
