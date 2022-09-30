import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Svg, { Path, Rect } from "react-native-svg"
import FooterScreenComponent from '../Block/FooterScreen';
import ChickenRichHensComponent from '../Block/ChickenRichHensComponents';
import AddChickenComponent from '../Block/AddChickenComponent';
import HeaderScreenTwoBlockComponent from '../Block/HeaderScreenTwooBlocks';

export default function OtherScreenComponent({ navigation }) {

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    const [data, setData] = useState([])
    
    // Get request for Chickens data
    async function getChickensData() {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;
        await fetch('https://api.richhens.com/api/v1/farm/eggs', {
            method: 'GET',
            headers: {
                'Authorization': AuthStr,
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res => { setData(res.data.eggs) })
    }

    // useEffect for uploading in every time when  go to that page
    useEffect(() => {
        setAppState({ loading: true });
        getChickensData()
    }, [setAppState])

    console.log(data, 'eggs data ')
    

    return (
        <SafeAreaView style={styles.container}>
            <HeaderScreenTwoBlockComponent
                linkFirst={'EGGS'}
                linkSecond={'GEMS'}
                navigation={navigation}
            />
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/image2.png')}>
                <ScrollView>
                    <View style={styles.block}>
                    {
                            data.map((value, index) => {
                                return (
                                    <ChickenRichHensComponent
                                        navigation={navigation}
                                        key={index}
                                        imageFirst={value.picture}
                                        name={value.type}
                                        price={'BREAK'}
                                        e={'SingleChickenScreen'}
                                    />
                                )
                            })
                        }
                        <AddChickenComponent name={'BREED CHICK'} />
                    </View>
                </ScrollView>
            </ImageBackground>
            <FooterScreenComponent navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    backgroundImage: {
        marginTop: 10,
        width: '100%',
        flex: 1
    },
    block: {
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
})