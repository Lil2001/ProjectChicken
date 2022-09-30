import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import Svg, { Path, Rect } from "react-native-svg"
import HeaderScreenComponent from '../Block/HeaderScreen';
import FooterScreenComponent from '../Block/FooterScreen';
import ChickenRichHensComponent from '../Block/ChickenRichHensComponents';
import AddChickenComponent from '../Block/AddChickenComponent';
import HeaderScreenMarketComponent from '../Block/HeaderScreenMarket';

let chickenData = [
    { id: 1, imageFirst: require('../../assets/images/chickenfem01.png'), name: 'PREMIUM   PR 10', price: '6.00 BNB', link: 'SingleChickenScreen' },
    { id: 2, imageFirst: require('../../assets/images/chickenfem02.png'), name: 'PREMIUM   PR 10', price: '6.00 BNB', link: 'SingleChickenScreen' },
    { id: 3, imageFirst: require('../../assets/images/chickenfem3.png'), name: 'PREMIUM   PR 10', price: '6.00 BNB', link: 'SingleChickenScreen' },
    { id: 4, imageFirst: require('../../assets/images/chickenfem2.png'), name: 'PREMIUM   PR 10', price: '6.00 BNB', link: 'SingleChickenScreen' },
    { id: 5, imageFirst: require('../../assets/images/chickenfem03.png'), name: 'PREMIUM   PR 10', price: '6.00 BNB', link: 'SingleChickenScreen' }
]

export default function MarketBuyScreenComponent({ navigation }) {
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
                        {chickenData.map((res, index) => {
                            return (
                                <ChickenRichHensComponent
                                    navigation={navigation}
                                    key={index}
                                    imageFirst={res.imageFirst}
                                    imageSecond={res.imageSecond}
                                    name={res.name}
                                    price={res.price}
                                    e={res.link}
                                />
                            )
                        })}
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