import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FooterScreenComponent from '../Block/FooterScreen';


let data = [
    { id: 1, text: ' Your hen laid an egg! You have 00:25 sec to take it', idText: ' #485423520', image: require('../../assets/images/smileIcon.png'), name: '', time: '22 Sept 15:00:00' },
    { id: 2, text: ' Your hen’s egg has been stolen.', idText: ' #485423520', image: require('../../assets/images/sadIcon.png'), name: '', time: '22 Sept 15:00:00' },
    { id: 3, text: ' Your chick has died of starvation', idText: ' CH48546655', image: require('../../assets/images/sadIcon.png'), name: '', time: '22 Sept 15:00:00' },
    { id: 4, text: ' Your chick has become a hen', idText: '#485423520', image: require('../../assets/images/smileIcon.png'), name: ' CH48546655', time: '22 Sept 15:00:00' },
    { id: 5, text: ' Low rooster health level. Feed it immediately!', idText: ' #485423520', image: require('../../assets/images/warningIcon.png'), name: '', time: '22 Sept 15:00:00' },
    { id: 6, text: ' Your hen has been sold.', idText: ' #485423520', image: require('../../assets/images/smileIcon.png'), name: '', time: '22 Sept 15:00:00' },
    { id: 7, text: ' Your hen laid an egg! You have 00:15 sec to take it.', idText: ' #485423520', image: require('../../assets/images/smileIcon.png'), name: '', time: '22 Sept 15:00:00' },
    { id: 8, text: ' Your got 2.45 HEN from the egg.', idText: ' #485423520', image: require('../../assets/images/smileIcon.png'), name: '', time: '22 Sept 15:00:00' }
]

export default function TimeLineScreenComponent({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navDiv}>
                <View style={styles.navDivFirst}>
                    <TouchableOpacity style={styles.navDivFirstUser}>
                        <Image
                            style={styles.imagesize}
                            source={require('../../assets/images/userImage1.png')}
                        />
                        <View
                            style={styles.usser}
                        >
                            <Text style={styles.usserText} >User</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('TransactionPageScreen')}
                        style={styles.usserTwo} >
                        <View style={styles.usserTwoDiv}>
                            <Text style={[styles.usserTwoDivText, { marginLeft: 5 }]}>186.14</Text>
                            <Image style={{ width: 30, height: 30 }}
                                source={require('../../assets/images/userimage2.png')}
                            />
                        </View>
                        <View style={styles.usserTwoDiv}>
                            <Text style={[styles.usserTwoDivText, { marginLeft: 15 }]}>75.85</Text>
                            <Image style={{ width: 30, height: 30, marginRight: 3 }}
                                source={require('../../assets/images/userimage3.png')}
                            />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/image2.png')}
            >
                <ScrollView>
                    {data.map((value, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.notificationDiv}>
                                <Image
                                    style={{ width: 23, height: 23 }}
                                    source={value.image}
                                />
                                <Text style={styles.notificationText}>
                                    <Text style={styles.lineTextFirst}>{value.idText}</Text>
                                    {value.text}
                                    <Text style={styles.lineTextFirst}>{value.name}</Text>
                                </Text>
                                <Text style={styles.time}>{value.time}</Text>
                            </TouchableOpacity>
                        )

                    })}

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
        flex: 1,
    },
    navDiv: {
        width: '100%',

    },
    navDivFirst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    navDivFirstUser: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagesize: {
        width: 48,
        height: 48,
        zIndex: 1,
        left: -2,
        position: 'absolute'
    },
    usser: {
        padding: 10,
        width: 100,
        borderWidth: 1,
        position: 'relative',
        borderRadius: 50,
        borderColor: '#CBCCCB'
    },
    usserText: {
        textAlign: 'right',
        fontSize: 12,
        lineHeight: 15,
        color: '#333333',
        paddingRight: 10,
        fontFamily: 'Inter_400Regular'
    },
    usserTwo: {
        width: 200,
        padding: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#CBCCCB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginRight: 5
    },
    usserTwoDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '45%',

    },
    usserTwoDivText: {
        fontSize: 13,
        lineHeight: 13,
        color: '#333333',
        textAlign: 'center'
    },
    notificationDiv: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#6D736A',
        padding: 10,
        alignSelf: 'center',
        marginTop: 7,
        flexDirection: 'row',
        position: 'relative',
        paddingBottom: 20
    },
    notificationText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Inter_400Regular',
        color: '#000000',
        width: 298,
        marginLeft: 10,
        paddingLeft: 5,
        position: 'relative'
    },
    lineTextFirst: {
        color: '#C7AD66',
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Inter_400Regular',
        textDecorationLine: 'underline'
    },
    time: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        fontSize: 9,
        lineHeight: 11,
        color: '#000000',
        textAlign: 'center'
    }
})