import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from './navigation/navigation';

const fetchFonts = () => {
    return Font.loadAsync({
        'minecraft': require('./assets/fonts/Minecraft.ttf'),
    });
};

const App: React.FC = () => {
    const [fontLoad, setFontLoad] = useState(false);

    if (!fontLoad) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoad(true)}
                onError={console.warn}
            />
        )
    } 

    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};

export default App;