import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function AddChickenComponent({ navigation, name }) {
    return (
        <TouchableOpacity style={styles.addBlock}>
            <Image
                style={{ width: 55, height: 55 }}
                source={require('../../assets/images/plus.png')}
            />
            <Text style={styles.addBlockText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addBlock: {
        width: '48%',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#333333',
        borderRadius: 7,
        backgroundColor: '#EDEDED',
        marginTop: 15,
        height: 189,
        justifyContent: 'center'
    },
    addBlockText: {
        fontSize: 10,
        fontFamily: 'Inter_300Light',
        lineHeight: 12,
        color: '#333333',
        textAlign: 'center',
        marginTop: 20
    }
})
