import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import Svg, { Path, Rect } from "react-native-svg"
import HeaderScreenMarketComponent from '../Block/HeaderScreenMarket';
import FooterScreenComponent from '../Block/FooterScreen';
import ChickenRichHensComponent from '../Block/ChickenRichHensComponents';
import AddChickenComponent from '../Block/AddChickenComponent';
let chickenData = [
    {
        id: 1,
        imageFirst: require('../../assets/images/chickenbaby1.png'),

        name: 'PREMIUM   PR 10',
        price: 'Feed'
    },
    {
        id: 2,
        imageFirst: require('../../assets/images/chickenbaby2.png'),

        name: 'PREMIUM   PR 10',
        price: 'Feed'
    },
    {
        id: 3,
        imageFirst: require('../../assets/images/chickenbaby3.png'),

        name: 'PREMIUM   PR 10',
        price: 'Feed'
    },
    {
        id: 4,
        imageFirst: require('../../assets/images/chickenbaby3.png'),

        name: 'PREMIUM   PR 10',
        price: 'Feed'
    },
    {
        id: 5,
        imageFirst: require('../../assets/images/chickenbaby1.png'),

        name: 'PREMIUM   PR 10',
        price: 'Feed'
    },
    {
        id: 6,
        imageFirst: require('../../assets/images/chickenbaby2.png'),

        name: 'PREMIUM   PR 10',
        price: 'Feed'
    },
]

export default function ChickenBabysMarketScreenComponent({ navigation }) {
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
                        {chickenData.map((res, index) => {
                            return (
                                <ChickenRichHensComponent
                                    key={index}
                                    imageFirst={res.imageFirst}
                                    name={res.name}
                                    price={res.price}
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