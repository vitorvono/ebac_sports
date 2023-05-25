import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import productsApi from '../services/ebac_products'

export const store = configureStore({
    //RootReducer:
    reducer: {
        carrinho: carrinhoReducer,
        favoritos: favoritosReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})

// Tipagem do RootReducer:
export type RootReducer = ReturnType<typeof store.getState>