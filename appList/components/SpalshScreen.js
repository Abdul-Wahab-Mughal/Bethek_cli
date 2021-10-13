/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function SpalshScreen(props) {
    return (
        <View style={styles.container}>
            <Image source={require('../Team-Img/bethek.png')} style={styles.splashImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        height: '95%',
        width: '95%',
    },
});

export default SpalshScreen;
