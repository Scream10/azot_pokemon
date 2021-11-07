import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { pokemonApi, pokemonPicturesApi } from '../api/pokemon';

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [pokemonPicturesApi.reducerPath]: pokemonPicturesApi.reducer,
    },
    // hide in developement mode
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { ignoredPaths: ['some.nested.path'] },
        serializableCheck: { ignoredPaths: ['some.nested.path'] }
    })
})

setupListeners(store.dispatch)

export default store;