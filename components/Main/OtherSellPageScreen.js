import { View, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FooterScreenComponent from '../Block/FooterScreen';
import ChickenRichHensComponent from '../Block/ChickenRichHensComponents';
import AddChickenComponent from '../Block/AddChickenComponent';
import HeaderScreenMarketComponent from '../Block/HeaderScreenMarket';

let chickenData = [
    { id: 1, imageFirst: require('../../assets/images/egg1.png'), name: 'GOLDEN', price: 'BREAK', link: 'SingleChickenScreen' },
    { id: 2, imageFirst: require('../../assets/images/egg2.png'), name: 'SILVER', price: 'BREAK', link: 'SingleChickenScreen' },
    { id: 3, imageFirst: require('../../assets/images/egg3.png'), name: 'ECO', price: 'BREAK', link: 'SingleChickenScreen' },
    { id: 4, imageFirst: require('../../assets/images/egg4.png'), name: 'RUBY', price: 'BREAK', link: 'SingleChickenScreen' },
    { id: 5, imageFirst: require('../../assets/images/egg2.png'), name: 'PREMIUM   PR 10', price: 'BREAK', link: 'SingleChickenScreen' },
    { id: 6, imageFirst: require('../../assets/images/egg1.png'), name: 'GOLDEN', price: 'BREAK', link: 'SingleChickenScreen' }
]


export default function OtherSellScreenComponent({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderScreenMarketComponent
                navigation={navigation}
                linkFirst={'BUY'}
                linkSecond={'SELL'}
                d={'OtherSellScreen'}
                e={'OtherBuyScreen'}
            />
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/image2.png')}>
                <ScrollView>

                    <View style={styles.block}>
                        <AddChickenComponent
                            name={'BREED CHICK'}
                        />
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