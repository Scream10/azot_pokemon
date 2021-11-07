import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import Pokemon from './screens/Pokemon';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
        'minecraft': require('./assets/fonts/Minecraft.ttf'),
    });
};

export default function App() {
    const [fontLoad, setFontLoad] = useState(false);
    const Stack = createNativeStackNavigator();

    if (!fontLoad) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoad(true)}
                onError={console.warn}
            />
        )
    }

    const StackNavigator = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Pokemons" 
                    component={Home} 
                    options={{ 
                        headerTitleStyle: {color: '#fff'},
                        gestureEnabled: true,
                        headerLeft: () => (
                            <Text style={styles.header}>
                                Pokemons
                            </Text>
                        )
                    }}
                />
                <Stack.Screen 
                    name="Pokemon" 
                    component={Pokemon} 
                    options={{ 
                        headerTitleStyle: {color: '#fff'},
                        gestureEnabled: true,
                        headerBackTitle: 'Pokemon',
                        headerBackTitleStyle: { fontSize: 18 },
                        headerTintColor: '#000'
                    }}
                />
            </Stack.Navigator>  
        )
    } 

    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerGoBack: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    },
    buttonGoBack: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})