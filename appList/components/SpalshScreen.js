/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image } from 'react-native';

function SpalshScreen(props) {
    return (
        <Image style={{ height: '100%', width: '100%' }}
            source={require('../Team-Img/bethek.png')}
        />
    );
}

export default SpalshScreen;
