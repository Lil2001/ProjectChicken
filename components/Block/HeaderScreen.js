import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Svg, { Path, Rect } from "react-native-svg"
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';

export default function HeaderScreenComponent({ navigation }) {
    const [changeNav, setChangeNav] = useState(0)

    let navigationData = [
        {
            id: 1,
            name: 'HENS',
            link: 'HensScreen'
        },
        {
            id: 2,
            name: 'ROOSTERS',
            link: 'RichScreen'
        },
        {
            id: 3,
            name: 'CHICKS',
            link: 'ChickenBabyScreen'
        },
        {
            id: 4,
            name: 'OTHER',
            link: 'OtherScreen'
        },
    ]
    const route = useRoute();

    const goToPages = (e) => {
        navigation.navigate(e)
    }

    return (
        <SafeAreaView>
            <View style={styles.navDiv}>
                <View style={styles.navDivFirst}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('UserProfileScreen')}
                        style={styles.navDivFirstUser}>
                        <Image style={styles.imagesize} source={require('../../assets/images/userImage1.png')} />
                        <View style={styles.usser}>
                            <Text style={styles.usserText}>User</Text>
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
                <View style={styles.navDivSecond} >
                    <View style={styles.navigation}>
                        {navigationData.map((value, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { goToPages(value.link) }}
                                    style={value.link === route.name ? styles.changeNavActive : styles.changeNav}
                                    key={index}
                                >
                                    <Text style={styles.navText}>{value.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.navDivThird}>
                    <TouchableOpacity style={styles.buttonYellow}>
                        <Text style={styles.buttonYellowText}>FEED ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonGray}>
                        <Text style={styles.buttonYellowText} >NEWEST FIRST</Text>
                        <Svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M4.5 6L1 0.5H8L4.5 6Z" stroke="black" stroke-width="0.5" />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonGray}>
                        <Text style={styles.buttonYellowText}>FILTER (0)</Text>
                        <Image source={require('../../assets/images/imgfilter.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
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
        paddingLeft: 25,
        paddingRight: 25
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
        fontSize: 13,
        lineHeight: 15,
        color: '#333333',
        paddingRight: 13,
        fontFamily: 'Inter_500Medium'
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
    navDivSecond: {
        alignItems: 'center'
    },
    navigation: {
        width: '90%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#CBCCCB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navDivThird: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10

    },
    buttonYellow: {
        backgroundColor: '#FFF799',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#666666',
        borderBottomWidth: 3,
        marginLeft: 35
    },
    buttonGray: {
        backgroundColor: '#E6E6E3',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#666666',
        borderBottomWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10
    },

    buttonYellowText: {
        textAlign: 'center',
        fontSize: 8,
        lineHeight: 10,
        fontFamily: 'Inter_400Regular',
        color: '#666666',
        marginRight: 5
    },
    footer: {
        width: '100%',
        height: 80,
        borderTopWidth: 1,
        borderTopColor: '#7E9491',
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    backgroundImage: {
        marginTop: 10,
        width: '100%',
        flex: 1
    },
    footernav: {
        alignItems: 'center'
    },
    footerNavText: {
        color: '#A09999',
        fontSize: 9,
        lineHeight: 11,
        marginTop: 7
    },
    navText: {

        fontSize: 9,
        lineHeight: 11,
        color: '#333333',
        fontFamily: 'Inter_500Medium'
    },
    changeNav: {
        width: '25%',
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    changeNavActive: {
        width: '25%',
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CBCCCB',
        backgroundColor: '#FFF799',
        elevation: 10
    }
})