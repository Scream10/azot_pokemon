import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface Pokemon {
    results: []
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

export const { useGetPokemonByNameQuery } = pokemonApi