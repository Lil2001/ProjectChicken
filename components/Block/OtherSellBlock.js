import {  View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

let buttonsData = ['BUY NOW']

export default function OtherSellBlock({ id, image, navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.containerId} >
                <Text style={styles.containerIdText}>{id}</Text>
            </View>
            <Image
                style={{ width: 158, height: 170, alignSelf: 'center', marginTop: 15, marginBottom: 10 }}
                source={image}
            />

            <View style={styles.blockDiv}>
                <Text>ECO EGG</Text>
            </View>
            <TextInput
                keyboardType='numeric'
                placeholder='Input Price in BNB'
                style={styles.inputStyle}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25, paddingLeft: 15, paddingRight: 15, marginBottom: 25 }}>
                {buttonsData.map((res, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.signUpButton} >
                            <Text style={styles.signUpText}>{res}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#91A5A1',
        alignSelf: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        marginTop: 20
    },
    containerId: {
        alignSelf: 'center',
        width: 122,
        height: 26,
        backgroundColor: '#F0F0F0',
        paddingTop: 2,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12
    },
    containerIdText: {
        textAlign: 'center',
        fontFamily: 'Inter_300Light',
        fontSize: 12,
        lineHeight: 15,
        color: '#333333'
    },
    blockDiv: {
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
        marginTop: 5
    },
    blockDivImg: {
        width: 32,
        height: 32,
    },
    inputStyle: {
        width: '80%',
        backgroundColor: '#F3F3F3',
        borderWidth: 1,
        borderColor: '#515051',
        borderRadius: 20,
        padding: 5,
        textAlign: 'center',
        fontStyle: 'italic',
        alignSelf: 'center',
        marginTop: 15
    },
    signUpButton: {
        width: '35%',
        backgroundColor: '#FFF799',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#333333',
        borderBottomWidth: 3,
    },
    signUpText: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#333333',
    },

})

