import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


let staticData = [{ id: 1, name: 'HELTH', price: '%', count: 50, backgroundColor: '#FF533E', value: 50 },]
let buttonsData = ['FEED']

export default function ChickenBabyBlock({ id, chickenId }) {
    console.log(chickenId, '')
    const [appState, setAppState] = useState({ loading: false, repos: null })
    const [chicks, setChicks] = useState([])
    const [health, setHealth] = useState(0)
    
    async function getChickensData() {
        let userToken = await AsyncStorage.getItem('userToken')
        let AuthStr = 'Bearer ' + userToken;
        let id = chickenId;
        await fetch(`https://api.richhens.com/api/v1/farm/chicks/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': AuthStr,
                "content-type": "application/json",
            }
        })
            .then(response => response.json())
            .then(res => {
                console.log(res, 'ss')
                setChicks(res.data.chick)
                setHealth(res.data.chick.health)
            })
    }

    // Feed Chicks

    async function putFeedChicks() {
        let userToken = await AsyncStorage.getItem('userToken')
        let AuthStr = 'Bearer ' + userToken;
        let id = chickenId;
        await fetch(`https://api.richhens.com/api/v1/farm/chicks/${id}/feed`, {
            method: 'PUT',
            headers: {
                'Authorization': AuthStr,
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res => { console.log(res, 'feed') })
    }


    
    //active page

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
                source={{ uri: `https://api.richhens.com/${chicks.picture}` }}
            />
            <View style={styles.blockDiv}>
                <Text>LEFT TO MATURITY</Text>
                <View style={styles.timeBlock}>
                    <Text style={styles.timeBlock_text}>15:25:02</Text>
                </View>
            </View>
            
            <View
                style={styles.progressParrent}>
                <Text style={styles.progressText}>HEALTH {chicks.health}% </Text>
                <View style={styles.progress}>
                    <View style={[styles.value, { width: health + '%', backgroundColor: 'red' }]}></View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, paddingLeft: 15, paddingRight: 15, }}>
                {buttonsData.map((res, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => putFeedChicks()}
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
        width: '40%',
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
    timeBlock: {
        width: 110,
        height: 36,
        backgroundColor: '#EAEAEA',
        borderRadius: 17,
        marginTop: 10,
        justifyContent: 'center'
    },
    timeBlock_text: {
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        fontFamily: 'Inter_300Light',
        color: '#333333'
    }
})