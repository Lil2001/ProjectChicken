import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium, Inter_300Light } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import Svg, { Path, Rect } from "react-native-svg"



export default function ChickenRichHensComponent({ imageFirst, imageSecond, name, price, navigation, e, chickensId }) {
    const goToPage = (e) => {
        navigation.navigate(e, { chickensId })
    }


    return (
        <TouchableOpacity
            onPress={() => goToPage(e)}
            style={styles.chickenBlock} >
            <View style={styles.idBlock}>
                <Text style={styles.idBlockText} >#451790238</Text>
            </View>
            <View style={styles.imgBlock} >
                <Image
                    style={{ width: 95, height: 130 }}
                    // source={}
                    // source={imageFirst}
                    source={{ uri: `https://api.richhens.com/${imageFirst}` }}
                />
                <Image
                    style={{ width: 26, height: 24, position: 'absolute', right: -25 }}
                    // source={}
                    source={imageSecond}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>{name}</Text>
                <View style={styles.footerbutton}>
                    <Text style={styles.footerbuttonText}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    chickenBlock: {
        width: '48%',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#333333',
        borderRadius: 7,
        backgroundColor: 'white',
        marginTop: 15

    },
    idBlock: {
        width: '57%',
        backgroundColor: '#F0F0F0',
        padding: 3,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    idBlockText: {
        fontSize: 9,
        fontFamily: 'Inter_300Light',
        lineHeight: 11,
        color: '#333333',
        textAlign: 'center'
    },
    imgBlock: {
        position: 'relative',
        marginTop: 15
    },
    footer: {
        marginTop: 6,
        width: '100%',
        backgroundColor: '#F0F0F0',
        padding: 15,
        alignItems: 'center',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        position: 'relative'
    },
    footerText: {
        fontSize: 8,
        fontFamily: 'Inter_400Regular',
        lineHeight: 8,
        color: '#333333',
        textAlign: 'center',

    },
    footerbutton: {
        width: 85,
        backgroundColor: '#FFF799',
        borderWidth: 0.5,
        borderColor: '#333333',
        borderRadius: 14,
        padding: 5,
        position: 'absolute',
        bottom: -11
    },
    footerbuttonText: {
        fontSize: 10,
        fontFamily: 'Inter_400Regular',
        lineHeight: 12,
        color: '#333333',
        textAlign: 'center',
    }
})