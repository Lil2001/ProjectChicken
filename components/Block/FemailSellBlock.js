import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

let buttonsData = ['SELL Now']

export default function FemSellBlock({ image, id, chickenId, quantity, chance, prod, quality, picture }) {

    const [price, setPrice] = useState('')

    async function sellChicken() {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken
        await fetch('https://api.richhens.com/api/v1/market/sell', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AuthStr
            },
            body: JSON.stringify({
                id: chickenId,
                amount: 1,
                entity_type: "chicken"
            })
        })
            .then(response => response.json)
            .then(res => console.log(res, ' ressss'))
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerId} >
                <Text style={styles.containerIdText}>{id}</Text>
            </View>
            <Image
                style={{ width: 168, height: 200, alignSelf: 'center', marginTop: 15, marginBottom: 10 }}
                source={{ uri: `https://api.richhens.com/${picture}` }}
            />

            <View style={styles.blockDiv}>
                {
                    [...new Array(4)].map((x, i) => <Image style={styles.blockDivImg} key={i} source={require('../../assets/images/Frame22.png')} />)
                }
            </View>
            <View style={styles.progressParrent}>
                <Text style={styles.progressText}>QUANTITY {quantity}</Text>
                <View style={styles.progress}>
                    <View style={[styles.value, { width: quantity * 3.3 + '%', backgroundColor: '#FFC700' }]}></View>
                </View>
            </View>
            <View style={styles.progressParrent}>
                <Text style={styles.progressText}>QUALITY {quality}</Text>
                <View style={styles.progress}>
                    <View style={[styles.value, { width: quality * 3.3 + '%', backgroundColor: '#00C318' }]}></View>
                </View>
            </View>
            <View style={styles.progressParrent}>
                <Text style={styles.progressText}>CHANCE {chance}</Text>
                <View style={styles.progress}>
                    <View style={[styles.value, { width: chance * 3.3 + '%', backgroundColor: '#00A8FF' }]}></View>
                </View>
            </View>
            <View style={styles.progressParrent}>
                <Text style={styles.progressText}>PRODUCTIVITY {prod}</Text>
                <View style={[styles.progress, { flexDirection: 'row' }]}>
                    {
                        [...new Array(prod)].map((x, i) => <View key={i} style={[{ width: 9.3 + '%', backgroundColor: '#00E755', marginRight: 2 }, i === 0 ? styles.bordersRadius : styles.bordersNone, i === 9 ? styles.borderRadiusRight : styles.bordersNone]}></View>)
                    }
                </View>
            </View>

            <TextInput
                placeholder='Input Price in BNB'
                keyboardType='numeric'
                value={price}
                onChangeText={(text) => setPrice(text)}
                style={styles.input}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25, paddingLeft: 15, paddingRight: 15, marginBottom: 20 }}>
                {buttonsData.map((res, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MarketScreen')}
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
        width: '40%',
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
    price: {
        textAlign: 'center',
        marginTop: 20,

        fontSize: 18,
        color: '#333333',
        lineHeight: 22
    },
    input: {
        width: '80%',
        backgroundColor: '#F3F3F3',
        borderWidth: 1,
        borderColor: '#515051',
        borderRadius: 20,
        padding: 5,
        textAlign: 'center',
        fontStyle: 'italic',
        alignSelf: 'center',
        marginTop: 15
    }
})