/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Image, StyleSheet, useColorScheme, StatusBar } from 'react-native';

function SplashScreen(props) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            <Image source={isDarkMode ?
                require('../Team-Img/HostelsLightmode.png')            // Darkmode
                : require('../Team-Img/HostelsDarkmode.png')           // Lightmode
            } style={styles.splashImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%',
    },
    splashImage: {
        height: '30%',
        width: '100%',
    },
});

export default SplashScreen;
