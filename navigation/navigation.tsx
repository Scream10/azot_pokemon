import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';

const Navigation: React.FC = () => {
    const Stack = createNativeStackNavigator();

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
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default Navigation;

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
