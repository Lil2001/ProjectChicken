import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium, Inter_300Light } from '@expo-google-fonts/inter';
import React, { useEffect, useState } from 'react';
import Svg, { Path, Rect } from "react-native-svg"
import AsyncStorage from '@react-native-async-storage/async-storage';


let buttonsData = ['BREAK', 'SELL']

export default function OtherScreenBlock({ id, image, navigation, chickenId }) {
    const [appState, setAppState] = useState({ loading: false, repos: null })
    const [eggs, setEggs] = useState([])

    async function getChickensData() {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;
        let id = chickenId;
        await fetch(`https://api.richhens.com/api/v1/farm/eggs/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': AuthStr,
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res =>  setEggs(res.data.egg))
    }

    useEffect(() => {
        setAppState({ loading: true });
        getChickensData()
    }, [setAppState])
 
    return (
        <View style={styles.container}>
            <View style={styles.containerId} >
                <Text style={styles.containerIdText}>{id}</Text>
            </View>
            <Image
                style={{ width: 158, height: 230, alignSelf: 'center', marginTop: 15, marginBottom: 10 }}
                source={{ uri: `https://api.richhens.com/${eggs.picture}` }}
            />
            <View style={styles.blockDiv}>
                <Text>{eggs.type}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 25, paddingLeft: 15, paddingRight: 15, marginBottom: 25 }}>
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
    progressParrent: {
        width: '100%',
        alignItems: "center",
        marginTop: 11
    },
    progressText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 10
    },
    progress: {
        width: 280,
        height: 22,
        backgroundColor: '#ECECEC',
        borderRadius: 13,
        padding: 4,
    },
    value: {
        height: '100%',
        borderRadius: 13
    },
    bordersRadius: {
        borderBottomLeftRadius: 13,
        borderTopLeftRadius: 13
    },
    bordersNone: {
        borderRadius: 0
    },
    signUpButton: {
        width: '35%',
        backgroundColor: '#FFF799',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#333333',
        borderBottomWidth: 3,
<<<<<<< HEAD
=======

>>>>>>> 8694c093d5c53efba3e8aa3e9305aac51a6003c6
    },
    signUpText: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#333333',
    },
    price: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: '#333333',
        lineHeight: 22
    }
})

