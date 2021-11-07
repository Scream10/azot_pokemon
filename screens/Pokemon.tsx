import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useGetPokemonPicturesQuery } from '../api/pokemon';

const { width, height } = Dimensions.get('screen');

interface PokemonProps {
    route: any
}

const Pokemon: React.FC<PokemonProps> = (props) => {
    const [switchPictures, setSwitchPictures] = useState<boolean>(true);
    const { data, error, isLoading } = useGetPokemonPicturesQuery(props.route.params.pokemon.url.split("/")[6]);

    const handleSwitchPictures = () => {
        setSwitchPictures(!switchPictures);
    };

    return (
        <View style={styles.container}>
            {isLoading ?
                <View style={styles.containerLoader}>
                    <ActivityIndicator size="large" color="red" />
                </View>
                : error ?
                    <View style={styles.containerError}>
                        <Text>Oups ! Une erreur s'est produite. Veuillez vérifier votre connexion internet.</Text>
                    </View>
                    :
                    <>
                        <Text style={styles.title}>{props.route.params.pokemon.name}</Text>
                        {data?.sprites.front_default && switchPictures ?
                            <Image style={styles.picture} source={{ uri: data.sprites.front_default }} />
                            : null
                        }
                        {data?.sprites.back_default && !switchPictures ?
                            <Image style={styles.picture} source={{ uri: data.sprites.back_default }} />
                            : null
                        }
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handleSwitchPictures()}
                        >
                            <Ionicons name="reload-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </>
            }
        </View>
    )
}
export default Pokemon;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        width,
        height,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'minecraft',
        textTransform: 'uppercase'
    },
    picture: {
        width: 250,
        height: 250
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 10,
        paddingLeft: 12,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
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
})