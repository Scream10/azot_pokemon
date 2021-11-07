import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

interface PokemonProps {
    route: any,
    front_default: string,
    back_default: string
}

const Pokemon: React.FC<PokemonProps> = (props) => {
    const [pictures, setPictures] = useState<{[k: string]: any} | null>(null);
    const [switchPictures, setSwitchPictures] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const getPokemonPictures = (url: string) => {
        setLoading(true);
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPictures(data.sprites);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSwitchPictures = () => {
        setSwitchPictures(!switchPictures);
    };

    useEffect(() => {
        getPokemonPictures(props.route.params.pokemon.url)
    }, [props.route.params.pokemon.url]);

    return (
        <View style={styles.container}>
            {loading ?
                <View style={styles.containerLoader}>
                    <ActivityIndicator size="large" color="red" />
                </View>
                :
                <>
                    <Text style={styles.title}>{props.route.params.pokemon.name}</Text>
                    {pictures?.front_default && switchPictures ?
                        <Image style={styles.picture} source={{ uri: pictures.front_default }} />
                        : null
                    }
                    {pictures?.back_default && !switchPictures ?
                        <Image style={styles.picture} source={{ uri: pictures.back_default }} />
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
    }
})