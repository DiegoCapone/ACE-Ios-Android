import React from 'react';
import Styles from '../styles/StylesPattern'

import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

const BtnSair = props => {
    return (
        <View>
            <TouchableOpacity onPress={props.action}>
                <View style={styles.container}>
                    <Text style={styles.title}>{props.nome}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: 75,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Styles.cor.verde,
        padding: Platform.OS == 'ios' ? 0 : 10,
        borderRadius: 5,
        marginTop: 10,
    },
    title: {
        fontSize: Styles.size.pequeno,
        fontFamily: Styles.font.helvetica,
        color: Styles.cor.branco
    }
})

export default BtnSair;