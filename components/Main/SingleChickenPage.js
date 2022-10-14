import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Switch, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ChickenBlockScreenComponent from '../Block/ChickenBlockScreen';
import RichBlockScreenComponent from '../Block/RichBlockScreen';
import ChickenBabyBlock from '../Block/ChickenBabyBlock';
import OtherScreenBlock from '../Block/OtherBlock';
import MailByBlock from '../Block/MailBuyBlock'
import FemSellBlock from '../Block/FemailSellBlock'
import FemByBlock from '../Block/FemBuyBlock';
import MailSellBlock from '../Block/MailSellBlock'
import OtherBuyBlock from '../Block/OtherBuyBlock'
import OtherSellBlock from '../Block/OtherSellBlock';

let data = [
    { id: 1, image: require('../../assets/images/chickenfem01.png'), text: '#451790238' },
    { id: 2, image: require('../../assets/images/chickenmail2.png'), text: '#451790238' }
]

export default function SingleChickenScreenComponent({ navigation }) {

    // const route = useRoute();
    const routes = navigation.getState()?.routes;
    console.log(routes, 'route')
    const prevRoute = routes[routes.length - 2];
    const route = useRoute()

    let chickenId = route.params.chickensId


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.backImage}
                source={require('../../assets/images/image2.png')}>
                <View style={styles.navDivFirst}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(prevRoute.name)}
                        style={styles.navDivFirstUser}>
                        <Image style={{ width: 40, height: 40 }}
                            source={require('../../assets/images/Frame27.png')} />
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
                {
                    prevRoute.name === 'HensScreen' &&
                    <ChickenBlockScreenComponent
                        id={'#451790238'}
                        chickenId={chickenId}
                        navigation={navigation}
                    />
                }
                {
                    prevRoute.name === 'RichScreen' &&
                    <RichBlockScreenComponent
                        id={'#451790238'}
                        chickenId={chickenId}
                        navigation={navigation}
                    />
                }
                {
                    prevRoute.name === 'ChickenBabyScreen' &&
                    <>
                        <ChickenBabyBlock
                            id={'#451790238'}
                            image={require('../../assets/images/chickenbaby1.png')}
                            chickenId={chickenId}
                        />
                        <View style={styles.box}>
                            <Text style={styles.box_nameText}>BREEDED FROM</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                {data.map((value, index) => {
                                    return (
                                        <View key={index} style={styles.miniblock}>
                                            <View style={styles.idBlock}>
                                                <Text style={styles.idBlockText} >{value.text}</Text>
                                            </View>
                                            <Image style={{ width: 98, height: 115, alignSelf: 'center', marginTop: 5 }} source={value.image} />
                                        </View>
                                    )
                                })}

                            </View>
                        </View>
                    </>
                }
                {prevRoute.name === 'OtherScreen' &&
                    <OtherScreenBlock
                        id={'#451790238'}
                        image={require('../../assets/images/egg3.png')}
                        chickenId={chickenId}
                        navigation={navigation}
                    />
                }
                {prevRoute.name === 'RichMarketBuyScreen' &&
                    <MailByBlock
                        id={'#451790238'}
                        image={require('../../assets/images/chickenmail4.png')}
                    />
                }
                {prevRoute.name === 'MarketScreen' &&
                    <FemSellBlock
                        id={'#451790238'}
                        image={require('../../assets/images/chickenfem1.png')}
                    />
                }

                {prevRoute.name === 'MarketBuyScreen' &&
                    <FemByBlock
                        id={'#451790238'}
                        image={require('../../assets/images/chickenfem1.png')}
                    />
                }
                {prevRoute.name === 'RichScreenMarket' &&
                    <MailSellBlock
                        id={'#451790238'}
                        image={require('../../assets/images/chickenmail4.png')}
                    />
                }
                {prevRoute.name === 'OtherBuyScreen' &&
                    <OtherBuyBlock
                        id={'#451790238'}
                        image={require('../../assets/images/egg3.png')}
                    />
                }

                {prevRoute.name === 'OtherSellScreen' &&
                    <OtherSellBlock
                        id={'#451790238'}
                        image={require('../../assets/images/egg3.png')}
                    />
                }

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: '100%',
            flex: 1,
        },
        backImage: {
            width: '100%',
            height: '100%',
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
        usserTwo: {
            width: 200,
            padding: 5,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#CBCCCB',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginRight: 5,
            backgroundColor: 'white'
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
        box: {
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
        box_nameText: {
            textAlign: 'center',
            marginTop: 10,
            fontSize: 13,
            lineHeight: 16,
            color: '#333333',
            fontFamily: 'Inter_400Regular'

        },
        miniblock: {
            width: '45%',
            backgroundColor: 'white',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#91A5A1',
            alignSelf: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 20,
            marginTop: 10
        },
        idBlock: {
            alignSelf: 'center',
            width: 94,
            height: 18,
            backgroundColor: '#F0F0F0',
            paddingTop: 2,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12
        },
        idBlockText: {
            textAlign: 'center',
            fontSize: 9,
            lineHeight: 11,
            color: '#333333',
            fontFamily: 'Inter_400Regular'
        }
    }

)