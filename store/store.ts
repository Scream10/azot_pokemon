import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { pokemonApi, pokemonPicturesApi } from '../api/pokemon';

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [pokemonPicturesApi.reducerPath]: pokemonPicturesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware).concat(pokemonPicturesApi.middleware)
})

setupListeners(store.dispatch)

export default store;