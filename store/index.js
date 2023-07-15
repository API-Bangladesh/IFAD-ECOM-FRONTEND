import {configureStore} from '@reduxjs/toolkit'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist"
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    cart: cartReducer
});

const persistConfig = {
    key: "root",
    version: 1,
    storage,

    /* if you do not want to persist this part of the state */
    // blacklist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
