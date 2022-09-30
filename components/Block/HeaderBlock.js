import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import React, { useState } from 'react';

export default function HeaderBlock({navigation}) {
    return (
        <View style={styles.navDivFirst}>
            <TouchableOpacity
                onPress={() => navigation.navigate('HensScreen')}
                style={styles.navDivFirstUser}>
                <Image style={{ width: 40, height: 40 }}
                    source={require('../../assets/images/Frame27.png')} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('TransactionPageScreen')}
                style={styles.usserTwo} >
                <View style={styles.usserTwoDiv}>
                    <Text style={styles.usserTwoDivText}>186. 14</Text>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../../assets/images/userimage2.png')}
                    />
                </View>
                <View style={styles.usserTwoDiv}>
                    <Text style={styles.usserTwoDivText}>75.85</Text>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../../assets/images/userimage3.png')}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navDivFirst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    navDivFirstUser: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    usserTwo: {
        width: 200,
        padding: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#CBCCCB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginRight: 5,
        backgroundColor: 'white'
    },
    usserTwoDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '40%',

    },
    usserTwoDivText: {
        fontSize: 13,
        lineHeight: 13,
        color: '#333333',
        textAlign: 'center'
    },
})