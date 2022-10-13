import { View, ScrollView, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderScreenMarketComponent from '../Block/HeaderScreenMarket';
import FooterScreenComponent from '../Block/FooterScreen';
import ChickenRichHensComponent from '../Block/ChickenRichHensComponents';
import AddChickenComponent from '../Block/AddChickenComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ChickenBabysMarketScreenComponent({ navigation }) {
    const [appState, setAppState] = useState({ loading: false, repos: null })
    const [sellData, setSellData] = useState([])

    // Get sell data market

    async function getMarketSellData() {
        let userToken = await AsyncStorage.getItem('userToken')
        let AuthStr = 'Bearer ' + userToken
        await fetch(`https://api.richhens.com/api/v1/market?entityType=chick`, {
            method: 'GET',
            headers: {
                'Authorization': AuthStr,
            }
        })
            .then(response => response.json())
            .then(json => { setSellData(json.data) })
    }
    // Update Page 

    useEffect(() => {
        setAppState({ loading: true })
        getMarketSellData()
    }, [setAppState])
    console.log(sellData)
    return (
        <SafeAreaView style={styles.container}>
            <HeaderScreenMarketComponent
                navigation={navigation}
                linkFirst={'BUY'}
                linkSecond={'SELL'}
                d={'ChickenBabyMarketScreen'}
                e={'ChickenBabyBuyScreen'}
            />
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/image2.png')}>
                <ScrollView>
                    <View style={styles.block}>
                        <AddChickenComponent
                            name={'SELL CHICKEN'}
                        />
                        {/* {Object.entries(sellData).map(([key, value], i) => <ChickenRichHensComponent key={i} navigation={navigation} value={key} imageFirst={value.item.picture} price={'6.00 BNB'} name={'PREMIUM   PR 10'} />)} */}
                        {sellData.map((value, index) => <ChickenRichHensComponent key={index} navigation={navigation} imageFirst={value.item.picture} price={'6.00 BNB'} name={'PREMIUM   PR 10'} />)}
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