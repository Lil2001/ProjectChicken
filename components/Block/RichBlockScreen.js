import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Switch, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";


let data = [
    { id: 1, img: require('../../assets/images/Frame22.png') },
    { id: 2, img: require('../../assets/images/Frame22.png') },
    { id: 3, img: require('../../assets/images/Frame22.png') },
    { id: 4, img: require('../../assets/images/Frame22.png') }
]


let staticData = [
    { id: 1, name: 'HELTH', price: '%', count: 50, backgroundColor: '#FF533E', value: 50 },
]

let valTwo = [
    1, 2, 3, 4, 5, 6, 7
]

let buttonsData = ['FEED', 'BREED', 'SELL']

export default function RichBlockScreenComponent({ image, id, chickenId }) {
    let [value, setValue] = useState(0)
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    console.log(chickenId, 'id ')
    
    async function getChickensData() {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;
        let id = chickenId
        await fetch(`https://api.richhens.com/api/v1/farm/roosters/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': AuthStr,
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res => { console.log(res) })
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
                style={{ width: 168, height: 200, alignSelf: 'center', marginTop: 15, marginBottom: 10 }}
                source={image}
            />
            <Text style={{ fontSize: 14, fontFamily: 'Inter_500Medium', textAlign: 'center', marginTop: 5, marginBottom: 10 }}>PREMIUM</Text>
            <View style={styles.blockDiv}>
                {data.map((res, index) => {
                    return (
                        <Image
                            style={styles.blockDivImg}
                            key={index}
                            source={res.img}
                        />
                    )
                })}
            </View>
            {staticData.map((res, index) => {
                return (
                    <View
                        key={index}
                        style={styles.progressParrent}>
                        <Text style={styles.progressText}>{res.name} {res.count}{res.price}</Text>
                        <View style={styles.progress}>
                            <View style={[styles.value, { width: res.value + '%', backgroundColor: res.backgroundColor }]}></View>
                        </View>
                    </View>
                )
            })}
            <View style={styles.progressParrent}>
                <Text style={styles.progressText}>PRODUCTIVITY 8</Text>
                <View style={[styles.progress, { flexDirection: 'row' }]}>
                    {
                        valTwo.map((item, index) => {
                            return (
                                <View key={index} style={[{ width: 10 + '%', backgroundColor: '#00E755', marginRight: 2 }, index === 0 ? styles.bordersRadius : styles.bordersNone]}></View>
                            )
                        })
                    }
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, paddingLeft: 15, paddingRight: 15, marginBottom: 20 }}>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: '30%',
        backgroundColor: '#FFF799',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#333333',
        borderBottomWidth: 3

    },
    signUpText: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#333333',
    },
})