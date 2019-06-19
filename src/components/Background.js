import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Image from '../assets/img/bg-home.png'

export default props => {
    return(
<ImageBackground source={Image} style={styles.background}>
    {props.content}
</ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'stretch'
    },
});
