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



export default function SingleSellChickenScreenComponent({ navigation, chickenId, quantity, quality, chance, prod, picture }) {

    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 3];
    const route = useRoute()
    const prev = routes[routes.length - 2]
    console.log(prev)
    console.log(route)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.backImage}
                source={require('../../assets/images/image2.png')}>
                <View style={styles.navDivFirst}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(prev.name, { chickenId })}
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
                {prevRoute.name === 'HensScreen' &&
                    <FemSellBlock
                        id={'#451790238'}
                        image={require('../../assets/images/chickenfem1.png')}
                        chickenId={route.params.chickenId}
                        chance={route.params.chance}
                        prod={route.params.prod}
                        quality={route.params.quality}
                        quantity={route.params.quantity}
                        picture={route.params.picture}
                    />
                }
                {prevRoute.name === 'RichScreenMarket' &&
                    <MailSellBlock
                        id={'#451790238'}
                        // image={require('../../assets/images/chickenmail4.png')}
                        chickenId={route.params.chickenId}
                        // chance={route.params.chance}
                        // prod={route.params.prod}
                        // quality={route.params.quality}
                        // quantity={route.params.quantity}
                        picture={route.params.picture}
                    />
                }
                {/* {prevRoute.name === 'RichScreenMarket' &&
                    <MailSellBlock
                        id={'#451790238'}
                        image={require('../../assets/images/chickenmail4.png')}
                        chickenId={route.params.chickenId}
                        chance={route.params.chance}
                        prod={route.params.prod}
                        quality={route.params.quality}
                        quantity={route.params.quantity}
                        picture={route.params.picture}
                    />
                }
                {prevRoute.name === 'OtherSellScreen' &&
                    <OtherSellBlock
                        id={'#451790238'}
                        image={require('../../assets/images/egg3.png')}
                    />
                } */}

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