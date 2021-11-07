import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { useGetPokemonByNameQuery } from '../api/pokemon';

const { width, height } = Dimensions.get('screen');

interface HomeProps {
    [key: string]: any
} 

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const { data, error, isLoading } = useGetPokemonByNameQuery('');

    return (
        <View style={styles.container}>
            <ScrollView>
                {isLoading ?
                    <View style={styles.containerLoader}>
                        <ActivityIndicator size="large" color="red" />
                    </View>
                    : error ? 
                        <View style={styles.containerError}>
                            <Text>Oups ! Une erreur s'est produite. Veuillez vérifier votre connexion internet.</Text>
                        </View>
                        : data ? 
                            data.results.map((pokemon: any, index: number) => {
                                return (
                                    <TouchableHighlight
                                        key={index}
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

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15
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
        fontWeight: 'bold',
        fontFamily: 'minecraft'
    },
    containerLoader: {
        width: width - 30,
        height: height - 140,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerError: {
        width: width - 30,
        alignItems: 'center'
    }
});
