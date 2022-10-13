import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


let data = [
    { id: 1, name: 'HEN', price: '125.45', image: require('../../assets/images/userimage2.png') },
    { id: 2, name: 'BNB', price: '25.58', image: require('../../assets/images/userimage3.png') }
]

export default function TransactionPageScreenComponent({ navigation }) {
    const [balance, setBalance] = useState([])
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2];


    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#F8F0CD', '#B6DAF6']}
                style={styles.block}
            >
                <View style={styles.headerBlock}>
                    <TouchableOpacity onPress={() => navigation.navigate(prevRoute.name)}>
                        <Image
                            style={{ width: 37, height: 37 }}
                            source={require('../../assets/images/backArrow.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.divSmall}>
                        <TouchableOpacity style={styles.buttonYellow}>
                            <Text style={styles.buttonYellowText}>Game</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txtbutton}>WALLET</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.accountText}>GAME ACCOUNT</Text>
                <View style={{ marginTop: 20 }}>
                    {data.map((value, index) => {
                        return (
                            <View style={styles.inputDiv} key={index}>
                                <View style={styles.inputDivFirst}>
                                    <Image
                                        style={{ width: 34, height: 34, marginRight: 5 }}
                                        source={value.image}
                                    />
                                    <Text style={styles.inputText}>{value.name}</Text>
                                </View>
                                <Text style={styles.inputText}>{value.price}</Text>
                            </View>
                        )
                    })}
                </View>
            </LinearGradient>
            <View style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: '#F5F5F5', borderBottomColor: '#000000', borderBottomWidth: 1 }}>
                <Text style={styles.transactionText}>TRANSACTION HISTORY</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '50%' }}>
                <Text style={styles.txt}>No Transactions Yet</Text>
                <Image style={{ width: 60, height: 60 }} source={require('../../assets/images/empty.png')} />
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
    block: {
        width: '100%',
        height: 280,
        padding: 25
    },
    divSmall: {
        width: '50%',
        flexDirection: 'row',
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#666666',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginLeft: 45
    },
    buttonYellow: {
        backgroundColor: '#FFF799',
        padding: 10.5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#666666',
        borderBottomWidth: 3,
        elevation: 4,
        paddingLeft: 25,
        paddingRight: 25
    },
    button: {
        padding: 5,
        paddingRight: 10
    },
    buttonYellowText: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_500Medium',
        color: '#333333',
    },
    txtbutton: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_500Medium',
        color: '#333333',
        paddingRight: 10
    },
    headerBlock: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    accountText: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Inter_500Medium',
        color: '#333333',
        marginTop: 25
    },
    inputDiv: {
        width: '80%',
        padding: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#4A5053',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 12,
        paddingRight: 15
    },
    inputDivFirst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_500Medium',
        color: '#383838',

    },
    transactionText: {
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Inter_400Regular',
        color: '#333333',
        marginLeft: 25,
    },
    txt: {
        color: '#DFDFDF',
        fontSize: 12,
        lineHeight: 15,
        fontFamily: 'Inter_500Medium',
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 20
    }
})