import { View, ScrollView, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import FooterScreenComponent from '../Block/FooterScreen';
import ChickenRichHensComponent from '../Block/ChickenRichHensComponents';
import AddChickenComponent from '../Block/AddChickenComponent';
import HeaderScreenMarketComponent from '../Block/HeaderScreenMarket';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MarketScreenComponent({ navigation }) {

    const [appState, setAppState] = useState({ loading: true, repos: null })
    const [sellData, setSellData] = useState([])

    async function getMarketSellData() {
        let userToken = await AsyncStorage.getItem('userToken')
        let AuthStr = 'Bearer ' + userToken
        await fetch('https://api.richhens.com/api/v1/market?entityType=chicken', {
            method: 'GET',
            headers: {
                'Authorization': AuthStr,
            }
        }
        )
            .then(response => response.json())
            .then(json => { console.log(json, 'ss'); setSellData(json.data) })
    }


    useEffect(() => {
        setAppState({ loading: true })
        getMarketSellData()
    }, [setAppState]);

    // console.log(sellData, 'ss')
    return (
        <SafeAreaView style={styles.container}>
            <HeaderScreenMarketComponent
                navigation={navigation}
                linkFirst={'BUY'}
                linkSecond={'SELL'}
                d={'MarketScreen'}
                e={'MarketBuyScreen'}
            />
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/image2.png')}>
                <ScrollView>
                    <View style={styles.block}>
                        <AddChickenComponent
                            name={'SELL CHICKEN'}
                        />
                        {sellData.map((value, index) => <ChickenRichHensComponent key={index} navigation={navigation} imageFirst={value.item.picture} e={'SingleChickenScreen'} price={'6.00 BNB'} name={'PREMIUM   PR 10'} />)}
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

