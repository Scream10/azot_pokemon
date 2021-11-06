import React, { useState } from 'react';
import { Provider } from 'react-redux'
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
                onError={console.log('error')}
            />
        )
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Pokemons" component={Home} options={{
                        headerTitleAlign: 'left'
                    }} />
                    <Stack.Screen name="Pokemon" component={Pokemon} options={{
                        headerTitleAlign: 'left'
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};