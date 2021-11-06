import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView, TouchableHighlight } from 'react-native';
import { useGetPokemonByNameQuery } from '../services/pokemon';

const { width, height } = Dimensions.get('screen');

export default function Home({ navigation }) {
    const { data, error, isLoading } = useGetPokemonByNameQuery('');

    if (data) {
        console.log('data :', data)
    } else if (isLoading) {
        console.log(isLoading)
    } else if (error) {
        console.log(error);
    }

    // const pokemonContainer = (item: Object) => {
    //     <View style={styles.pokemonContainer}>
    //         <Text>{item.name}</Text>
    //     </View>
    // }

    return (
        <View style={styles.container}>
            {/* <FlatList
                data={data.results}
                keyExtractor={(_, index) => index.toString()}
                renderItem={pokemonContainer}
            /> */}
            <ScrollView>
                {data ? data.results.map((pokemon) => {
                    return (
                        <TouchableHighlight
                            style={styles.pokemonContainer}
                            activeOpacity={0.7}
                            underlayColor="#ff6666"
                            onPress={() => navigation.navigate({
                                name: 'Pokemon',
                                params: { pokemon: pokemon }
                            })}
                        >
                            <Text style={styles.pokemonTitle}>{pokemon.name}</Text>
                        </TouchableHighlight>
                    )
                })
                    : null
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    pokemonContainer: {
        width: width - 30,
        paddingVertical: 30,
        backgroundColor: "red",
        marginVertical: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonTitle: {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 21,
        fontWeight: 'bold'
    }
});
