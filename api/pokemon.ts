import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Pokemon {
    results: [],
    [key: string]: any
}

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

export const pokemonPicturesApi = createApi({
    reducerPath: 'pokemonPicturesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://pokeapi.co/api/v2/` }),
    endpoints: (builder) => ({
        getPokemonPictures: builder.query<Pokemon, string>({
            query: (index) => `pokemon/${index}`,
        }),
    }),
})

export const { useGetPokemonByNameQuery } = pokemonApi
export const { useGetPokemonPicturesQuery } = pokemonPicturesApi