import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Switch, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

let buttonsData = ['FEED', 'BREED', 'SELL']

export default function RichBlockScreenComponent({ image, id, chickenId }) {
    const [appState, setAppState] = useState({ loading: false, repos: null });
    const [health, setHealth] = useState(0);
    const [prod, setProd] = useState(0)
    const [rooster, setRooster] = useState([])


    // Get Roosters Data
    async function getChickensData() {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;
        let id = chickenId;
        await fetch(`https://api.richhens.com/api/v1/farm/roosters/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': AuthStr,
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res => {
                setRooster(res.data.rooster)
                setHealth(res.data.rooster.health)
                setProd(res.data.rooster.productivity)
            })
    }

    // Feed Roosters
    async function putFeedRoosters() {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;
        let id = chickenId;
        await fetch(`https://api.richhens.com/api/v1/farm/roosters/${id}/feed`, {
            method: 'PUT',
            headers: {
                'Authorization': AuthStr,
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res => { console.log(res, 'feed') })
    }


    useEffect(() => {
        setAppState({ loading: true });
        getChickensData()
    }, [setAppState])

    console.log(rooster, 'rooster')

    return (
        <View style={styles.container}>
            <View style={styles.containerId} >
                <Text style={styles.containerIdText}>{id}</Text>
            </View>
            <Image
                style={{ width: 168, height: 230, alignSelf: 'center', marginTop: 15, marginBottom: 10 }}
                source={{ uri: `https://api.richhens.com/${rooster.picture}` }}
            />
            <Text style={styles.text}>PREMIUM</Text>
            <View style={styles.blockDiv}>
                {
                    [...new Array(4)].map((x, i) => <Image style={styles.blockDivImg} key={i} source={require('../../assets/images/Frame22.png')} />)
                }
            </View>
            <View style={styles.progressParrent}>
                <Text style={styles.progressText}>HEALTH {rooster.health}%</Text>
                <View style={styles.progress}>
                    <View style={[styles.value, { width: health + '%', backgroundColor: '#FF533E' }]}></View>
                </View>
            </View>
            <View style={styles.progressParrent}>
                <Text style={styles.progressText}>PRODUCTIVITY {rooster.productivity}</Text>
                <View style={[styles.progress, { flexDirection: 'row' }]}>
                    {
                        [...new Array(prod)].map((x, i) => <View key={i} style={[{ width: 9.3 + '%', backgroundColor: '#00E755', marginRight: 2 }, i === 0 ? styles.bordersRadius : styles.bordersNone, i === 9 ? styles.borderRadiusRight : styles.bordersNone]}></View>)
                    }
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, paddingLeft: 15, paddingRight: 15, marginBottom: 20 }}>
                {buttonsData.map((res, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.signUpButton}
                            onPress={() => {
                                if (index === 0) {
                                    putFeedRoosters()
                                }
                            }}
                        >
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
    text: {
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
        lineHeight:17,
        color:'#333333',
        textTransform:'uppercase'
    }
})