import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

let navigationFooterData = [
    { id: 1, name: 'FARM', image: require('../../assets/images/imgfooter1.png'), link: 'HensScreen' },
    { id: 2, name: 'TIMELINE', image: require('../../assets/images/imgfooter2.png'), link: 'TimelineScreen' },
    { id: 3, name: 'SOCIAL', image: require('../../assets/images/imgfooter3.png'), link: '' },
    { id: 4, name: 'MARKET', image: require('../../assets/images/imgfooter4.png'), link: 'MarketScreen' },
]

export default function FooterScreenComponent({ state, descriptors, navigation }) {
    let [active, setActive] = useState(0)

    const goToPage = (e, index) => {
        navigation.navigate(e)
        setActive(active = index)
    }

    const route = useRoute();
    // console.log(route.name);
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('HensScreen') }}
                style={styles.footernav}
            >
                <Image
                    style={route.name === 'HensScreen' || route.name === 'RichScreen' || route.name === 'ChickenBabyScreen' || route.name === 'OtherScreen' ? styles.imageStyleActive : styles.imageStyle}
                    source={require('../../assets/images/imgfooter1.png')}
                />
                <Text style={styles.footerNavText}>FARM</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('TimelineScreen') }}
                style={styles.footernav}
            >
                <Image
                    style={route.name === 'TimelineScreen' ? styles.imageStyleActive : styles.imageStyle}
                    source={require('../../assets/images/imgfooter2.png')}
                />
                <Text style={styles.footerNavText}>TIMELINE</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('') }}
                style={styles.footernav}
            >
                <Image
                    style={route.name === '' ? styles.imageStyleActive : styles.imageStyle}
                    source={require('../../assets/images/imgfooter3.png')}
                />
                <Text style={styles.footerNavText}>SOCIAL</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('MarketScreen') }}
                style={styles.footernav}
            >
                <Image
                    style={route.name === 'MarketScreen' || route.name === 'RichScreenMarket' || route.name === 'ChickenBabyMarketScreen' ? styles.imageStyleActive : styles.imageStyle}
                    source={require('../../assets/images/imgfooter4.png')}
                />
                <Text style={styles.footerNavText}>MARKET</Text>
            </TouchableOpacity>
        </View>
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
        width: '40%',

    },
    usserTwoDivText: {
        fontSize: 11,
        lineHeight: 13,
        color: '#333333',
        textAlign: 'center'
    },
    navDivSecond: {
        alignItems: 'center'
    },
    navigation: {
        width: '95%',
        padding: 7,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#CBCCCB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
        borderColor: '#333333',
        elevation: 4,
        marginLeft: 35
    },
    buttonGray: {
        backgroundColor: '#E6E6E3',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#333333',
        elevation: 4,
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
        color: '#333333',
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
        alignItems: 'center',
        backgroundColor: 'white'

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
    footerNavTextActive: {
        color: '#A09999',
        fontSize: 9,
        lineHeight: 11,
        marginTop: 7
    },
    imageStyle: {
        width: 26,
        height: 27
    },
    imageStyleActive: {
        width: 26,
        height: 27,
        tintColor: '#3F3F3F'
    }
})
// import {HensScreenComponent }from '../Main';
// import {MarketScreenComponent} from '../Main';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

