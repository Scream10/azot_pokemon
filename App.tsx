import React from 'react';
import { Provider } from 'react-redux'
import Home from './screens/Home';
import Pokemon from './screens/Pokemon';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
    const Stack = createNativeStackNavigator();

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