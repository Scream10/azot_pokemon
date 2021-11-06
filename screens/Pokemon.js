import React from 'react';
import { View, Text, Image } from 'react-native';
import { useGetPokemonPicturesQuery } from '../services/pokemon';

export default function Pokemon(props) {
    // props.route.params.pokemon.url
    const { data, error, isLoading } = useGetPokemonPicturesQuery('');
    console.log("data 2:", data);

    return (
        <View>
            {props.route.params.pokemon ?
                <Text>{props.route.params.pokemon.name}</Text>
                : null
            }
            {/* <Image source={{ uri: props.route.params.pokemon.url }} /> */}
        </View>
    )
}