import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function AuthScreenComponent({navigation}) {
    const goToMainPage = () => {
        navigation.navigate('HensScreen')
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/image2.png')}
                resizeMode="cover"
            >
                <View style={styles.block}>
                    <Image
                        style={styles.blockImage}
                        source={require('../../assets/images/image4.png')}
                    />
                    <Text style={styles.textBlock}>
                        AUTHORIZATION CODE
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Input Code'
                        keyboardType='phone-pad'
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                    onPress={() => goToMainPage()}
                    style={styles.signUpButton} >
                        <Text style={styles.signUpText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.link}>
                        <Text style={[styles.agreeText, {textDecorationLine: 'underline'}]}>Where can i get a code?</Text>
                        
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    block: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#91A5A1',
        width: '80%',
        height: 357,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
    },
    blockImage: {
        width: 140,
        height: 88
    },
    textBlock: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Inter_300Light',
        marginTop: 15
    },
    input: {
        width: '90%',
        backgroundColor: '#F3F3F3',
        padding: 10,
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#515051',
        borderRadius: 25,
        fontStyle: 'italic',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:20
    },

    buttonText: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_500Medium ',
        color: '#FFC300'
    },
    agree: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        position: 'relative'
    },
    agreeText: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_400Regular',
        marginTop: 29,
        color: '#333333',
        marginLeft: 10
    },
    line: {

        height: 1,
        backgroundColor: '#333333',
        position: 'absolute',

    },
    signUpButton: {
        marginTop: 40,
        width: '50%',
        backgroundColor: '#FFF799',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#333333',
        // elevation: 8
        borderBottomWidth:3

    },
    signUpText: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#333333',
    },
    link: {
        position: 'relative'
    },
    rightFirst: {
        bottom: 0,
        right: "20%",
        width: 100,
    },
    rightSecond: {
        bottom: -1,
        right: 0,
        width: 148
    }
})