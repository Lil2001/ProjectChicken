import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import Svg, { Path, Rect } from "react-native-svg"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreenComponent({ navigation }) {
    const [actives, setActives] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('')
    const [userId, setUserId] = useState(0)
    const [code, setCode] = useState(null)

    const goToLoginPage = () => {
        navigation.navigate('LoginScreen')
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
    };


    async function sendUserData() {
        await fetch('https://api.richhens.com/api/v1/register', requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res.status === 'success') {
                    console.log(res, 'userData')
                    setUserId(res.data.user.id)
                    sendEmailCode()
                }
            }
            )
    }

    const requestOptionsEmail = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId })
    }

    async function sendEmailCode() {
        await fetch('https://api.richhens.com/api/v1/register/send_code_email', requestOptionsEmail)
            .then(response => response.json())
            .then(res => {
                setModalVisible(!modalVisible)
            }
            )
    }

    const requestOptionsCode = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, code: Number(code) })
    }

    async function sendVerifiedCode() {
        await fetch('https://api.richhens.com/api/v1/register/verify_code', requestOptionsCode)
            .then(response => response.json())
            .then(data => {
                console.log(data, 'data')
                let userToken = data.data.token
                let refreshToken = data.data.refreshToken
                if (data.status === 'success') {
                    console.log(userToken, 'userToken')
                    setStorage(userToken, refreshToken, email, userId, function () {
                        navigation.navigate('HensScreen')
                    })
                }
            })
    }

    async function setStorage(userToken, refreshToken, email, userId, callback) {
        await AsyncStorage.setItem("userId", `${userId}`)
        await AsyncStorage.setItem("email", `${email}`)
        await AsyncStorage.setItem('userToken', `${userToken}`)
        await AsyncStorage.setItem('refreshToken', `${refreshToken}`)
        callback();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <StatusBar backgroundColor="white" />
                <View style={styles.modalDiv}>
                    <View style={styles.modalDivBlock}>
                        <Text style={styles.modalDivText}>Activation code were sent to your Email {"\n"}address. Please check your mailbox</Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={styles.signUpButton} >
                            <Text style={styles.signUpText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/image2.png')}
                resizeMode="cover"
            >
                <View style={styles.block}>
                    <Image
                        style={styles.blockImage}
                        source={require('../../assets/images/image4.png')}
                    />
                    <Text style={styles.textBlock}>SIGN UP/LOGIN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email address'
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                    />
                    <View style={styles.input}>
                        <TextInput
                            style={styles.inp}
                            placeholder='Verification code'
                            keyboardType='phone-pad'
                            value={code}
                            onChangeText={(text) => { setCode(text) }}
                        />
                        <TouchableOpacity
                            onPress={() => { sendUserData() }}
                            style={{ paddingRight: 10 }}
                        >
                            <Text style={styles.buttonText}>SEND CODE</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => setActives(!actives)}
                        style={styles.agree}>
                        {
                            !!actives ?
                                (
                                    <View style={styles.agreeCheckBox}>
                                        <Svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M3.80952 9L0 5.4L0.952381 4.05L3.80952 6.3L8.57143 0L10 0.9L3.80952 9Z" fill="#008100" />
                                        </Svg>
                                    </View>
                                )
                                :
                                (
                                    <View style={styles.agreeCheckBox}></View>
                                )
                        }

                        <Text style={styles.agreeText}> I agree to <Text style={{ textDecorationLine: 'underline' }}>Term of Use</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => sendVerifiedCode()}
                        style={styles.signUpButton} >
                        <Text style={styles.signUpText}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginScreen')}
                        style={styles.link}>
                        <Text style={[styles.agreeText, { textDecorationLine: 'underline' }]}>Account Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    block: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#91A5A1',
        width: '80%',
        height: 437,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
    },
    blockImage: {
        width: 140,
        height: 88
    },
    textBlock: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Inter_300Light',
        marginTop: 10
    },
    input: {
        width: '90%',
        backgroundColor: '#F3F3F3',
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#515051',
        borderRadius: 25,
        fontStyle: 'italic',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20
    },
    inp: {
        fontStyle: 'italic',
        width: '50%'
    },
    buttonText: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_800ExtraBold',
        color: '#F4CA16',

    },
    agree: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        position: 'relative'
    },
    agreeText: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_400Regular',
        marginTop: 10,
        color: '#333333',
        fontStyle: 'underline'
    },
    agreeCheckBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#008100',
        width: 20,
        height: 20,
        borderRadius: 4,
        marginTop: 6,
        marginRight: 10
    },
    line: {
        height: 1,
        backgroundColor: '#333333',
        position: 'absolute',

    },
    signUpButton: {
        marginTop: 40,
        width: '50%',
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
    link: {
        position: 'relative',
        marginTop: 10
    },
    rightFirst: {
        bottom: 0,
        right: "20%",
        width: 70,
    },
    rightSecond: {
        bottom: -1,
        right: 0,
        width: 88
    },
    modalDiv: {
        width: '100%',
        height: '100%',
        backgroundColor: '#333333',
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalDivBlock: {
        width: '85%',
        height: 185,
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    modalDivText: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_400Regular',
        color: '#272727',
    }
})