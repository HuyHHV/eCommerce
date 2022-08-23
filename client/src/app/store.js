import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice' ;
import cartReducer from '../features/cart/cartSlice';
import sidebarReducer from '../features/sidebar/sidebarSlice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: {persistedReducer,sidebarReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);